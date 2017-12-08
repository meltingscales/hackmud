import os.path
import pystache

templateFile = "template.private"
backupTemplateFile = "template.private.example"
currPath = "./"
defRule = ["{{", "}}"]  # default mustache rule
myRule = ["<", ">"]  # for setting custom rule


def printif(thing, b):
    if(b):
        print(thing)


def pi(*args):
    printif(*args)


def swapRule(orig, repl):
    return (orig[0]+"="+repl[0]+" "+repl[1]+"="+orig[1])


# if template file doesn't exist, use default one with fake names.
if (os.path.isfile(templateFile)) is False:
    templateFile = backupTemplateFile

fileDict =\
 {
  "info/hackmud.commands.txt":
  {
   "output":  "info/hackmud.commands.private",
   "template": templateFile,
  },
 }


def sanitize(str, strip=[" "], remove=["\r", "\n"]):
    """Return a whitespace-stripped, newline-stripped string.

    Args:
     str (str): The string to be sanitized.
     strip (str[], optional) Additional things to be stripped.
     remove (str[], optional) Additional things to be removed.
    Returns:
     (str) The sanitized string.

    """
    for stripme in strip:
        str = str.strip(stripme)

    for removeme in remove:
        str = str.replace(removeme, "")

    return str


def readFile(path):
    """Return a file's contents as a list of strings.

    Args:
     path (str): The path to the file.
    Returns:
     (str[]): The contents of the file.

    """
    ret = []
    f = open(path, "r")
    for line in f:
        ret.append(line)
    return ret


def writeFile(path, contents):
    """Write a string to a file.

    Args:
     path (str): The path to a file to be written.
     contents (str): The contents of that file.
    """
    f = open(path, "w")
    f.write(contents)
    f.close()


def parseRules(rules, delim=":"):
    """Return a valid pystache ruleset dictionary from a string.

    Args:
     rules (str[]): The list of string that represent a pystache hash.
     delim (str, optional): Delimiter that separates keys from values.
    Returns:
     A mustache hash.

    """
    ret = {}

    for line in rules:
        line = sanitize(line)
        split = line.split(delim)
        ret[split[0]] = split[1]

    return ret


def main():
    for key, value in fileDict.items():
        print("Going to use file '{0}'".format(key))
        print("to generate file '{0}'".format(value["output"]))
        print("based on the template at '{0}'.".format(value["template"]))

        hash = parseRules(
                readFile(
                 value["template"]))  # template -> {the:rules}

        template = ''.join(readFile(currPath + key))  # read a file to format

        template = swapRule(defRule, myRule) + template  # prepend our carets

        # print("Template: '{0}'".format(template))
        print("Mustache hash: '{0}'".format(hash))
        parsed = pystache.parse(u""+template)  # pre-parse a template
        filled = pystache.render(parsed, hash)

        writeFile(value["output"], filled)  # write the file.
        # print("Formatted template: \n{0}".format(filled))

    return


print("Inserting all templates...")

main()
