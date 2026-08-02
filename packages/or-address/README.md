## X.400 Message Handling Service O/R Address Type

## RFC 1685 Display Behavior

This crate implements `Display` for several types according to the
procedures defined in [IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685). It is not entirely clear, if there are multiple conflicting attribute types using different encodings, which should be displayed. Consider the following passage:

> If the attributes of an O/R address include characters from an
> extended character set, human users who do not normally use the
> same extended character set may have difficulty representing the
> O/R address or entering it into their messaging system. In this
> situation, an alias of the O/R address should be provided which is
> composed entirely of printable string characters.

In addition to this, at the time at which [IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685) was published, the "universal" equivalents of the X.400 MHS attributes were not defined, although teletex equivalents were. This does not mean that we cannot display them or parse them from strings, but it seems like the implementation should heavily prefer the printable syntaxes and teletex syntaxes, in that order.

## To Do

- [x] `ORAddress.toAttributes()`
- [ ] MIXER functionality
- [ ] Unit tests
- [ ] JSDoc
- [ ] README documentation
