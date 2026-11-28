
/**
 * @summary An attribute type and value split from an RFC 4514 string
 * @description
 *
 * Represents one attribute type and value assertion parsed by
 * {@link atavFromString}. When `isHexstring` is `true`, `value` is a raw
 * IETF RFC 4514 `hexstring` (`#` followed by hexadecimal octets of a BER
 * element) rather than an unescaped character string.
 */
export class ParsedAttributeTypeAndValue {
    readonly type: string;
    readonly value: string;
    readonly isHexstring: boolean;

    constructor(type: string, value: string, isHexstring: boolean = false) {
        this.type = type;
        this.value = value;
        this.isHexstring = isHexstring;
    }
}
