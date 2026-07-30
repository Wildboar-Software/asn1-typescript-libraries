import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BERElement,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { X213NetworkAddress } from "@wildboar/nsap-address";

function compareSelectors(
    selector1: OCTET_STRING | undefined,
    selector2: OCTET_STRING | undefined,
): boolean {
    if (!selector1 && !selector2) {
        return true;
    }
    if (!selector1 || !selector2) {
        return false;
    }
    if (selector1.length !== selector2.length) {
        return false;
    }
    return Buffer.compare(selector1, selector2) === 0;
}

function printOctetString(octetString: OCTET_STRING): string {
    const hex = Buffer.from(octetString).toString("hex").toUpperCase();
    return `'${hex}'H`;
}

export type PresentationAddressStrings = {
    pSelector?: string;
    sSelector?: string;
    tSelector?: string;
    nAddresses: string[];
}

function is_other_char(c: number): boolean {
    return (
        /[a-zA-Z0-9+/]/.test(String.fromCharCode(c))
        || c == '+'.charCodeAt(0)
        || c == '-'.charCodeAt(0)
        || c == '.'.charCodeAt(0)
    );
}

/// Displays the selector according to
/// [IETF RFC 1278](https://datatracker.ietf.org/doc/html/rfc1278)
/// 
/// ```abnf
/// <selector>  ::= '"' <otherstring> '"'        -- IA5
///                 | "#" <digitstring>          -- US GOSIP            40
///                 | "'" <hexstring> "'H"       -- Hex
///                 | ""                         -- Empty but present
/// ```
export function selectorToRfc1278String(
    selector: OCTET_STRING,
): string {
    const len = selector.length;
    /*
    Rationale:
  
    We check that len is greater than two before deciding to print as IA5,
    because:
    1. If the len is 2 or less, it is unlikely that the bytes actually encode
       a real ASCII. On the other hand, there is less than a 1% chance that all
       three or more characters are <other> by random chance.
    2. Two bytes are used in US GOSIP to encode selectors as an unsigned
       integer, so this prevents these selectors from being occassionally
       misrepresented in strings as ASCII.
  
    We check that the string is less than or equal to 16 bytes, because it is
    unlikely that an ASCII string longer than 16 bytes won't contain some
    non-<other> character, which would invalidate our requirements for printing.
    Sixteen bytes is the size limit for selectors in the ITU-T Rec. X.225 OSI
    Session protocol.
    */
    if (
        (len > 2)
        && (len <= 16)
        && Array.from(selector).every((b) => is_other_char(b))
    ) {
        const selstr = Buffer.from(selector).toString("ascii");
        return `"${selstr}"`;
    }
    const hex = Buffer.from(selector).toString("hex").toUpperCase();
    return `'${hex}'H`;
}

function selectorFromRfc1278String(s: string): OCTET_STRING | string {
    // A string with a length of one cannot be a valid selector string.
    if (s.length == 1) {
        return "malformed";
    }
    if (s.length === 0) {
        return new Uint8Array();
    }
    const firstChar = s[0];
    switch (firstChar) {
        case '"': {
            // string of <other>
            if (!s.endsWith('"')) {
                return "malformed";
            }
            const sub = s.slice(1, -1);
            // TODO: I think a regex would be faster.
            if (!Array.from(sub).every((c: string) => is_other_char(c.charCodeAt(0)))) {
                return "malformed";
            }
            return Buffer.from(sub, "ascii");
        }
        case "'":
            // hexstring
            if (!s.endsWith("'H")) {
                return "malformed";
            }
            const sub = s.slice(1, -2);
            if (!sub.match(/[0-9A-Fa-f]+/)) {
                return "malformed";
            }
            return Buffer.from(sub, "hex");
        case "#":
            // US GOSIP
            if (!/^\d+$/.test(s.slice(1))) {
                return "malformed";
            }
            const num = Number.parseInt(s.slice(1), 10);
            if (Number.isNaN(num) || num < 0 || num > 65535) {
                return "malformed";
            }
            return Buffer.from([num >> 8, num & 0xFF]);
        default:
            return "malformed";
    }
}

/**
* @summary PresentationAddress
* @description
* 
* Full OSI protocol stack address for an application. Various improvements have
* made this data structure suitable for representing modern non-OSI network
* addresses, including IPv4, IPv6, and URLs; generally, when these formats are
* used, the selectors are absent.
*
* ### ASN.1 Definition:
*
* ```asn1
* PresentationAddress ::= SEQUENCE {
*   pSelector   [0]  OCTET STRING OPTIONAL,
*   sSelector   [1]  OCTET STRING OPTIONAL,
*   tSelector   [2]  OCTET STRING OPTIONAL,
*   nAddresses  [3]  SET SIZE (1..MAX) OF OCTET STRING,
*   ... }
* ```
*
*/
export class PresentationAddress {
    constructor(
        /**
         * @summary `pSelector`: presentation-layer selector.
         * @public
         * @readonly
         */
        readonly pSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sSelector`: session-layer selector.
         * @public
         * @readonly
         */
        readonly sSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tSelector`: transport-layer selector.
         * @public
         * @readonly
         */
        readonly tSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nAddresses`: network-layer addresses.
         * @public
         * @readonly
         */
        readonly nAddresses: OCTET_STRING[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) { }

    /**
     * @summary Converts the PresentationAddress to the ASN.1 string representation.
     * @description
     * 
     * This converts the PresentationAddress to an ASN.1 string, such as:
     * 
     * ```asn1
     * { pSelector '0102'H, sSelector '0304'H, tSelector '0506'H, nAddresses { '0708'H } }
     * ```
     * 
     * @public
     * @method
     */
    public toASN1String(): string {
        const components: string[] = [];
        if (this.pSelector) {
            components.push(`pSelector ${printOctetString(this.pSelector)}`);
        }
        if (this.sSelector) {
            components.push(`sSelector ${printOctetString(this.sSelector)}`);
        }
        if (this.tSelector) {
            components.push(`tSelector ${printOctetString(this.tSelector)}`);
        }
        components.push(`nAddresses { ${this.nAddresses.map(nAddress => printOctetString(nAddress)).join(", ")} }`);
        return `{ ${components.join(", ")} }`;
    }

    /**
     * @summary Converts the PresentationAddress to the JSON Encoding Representation (JER).
     * @description
     * 
     * This converts the PresentationAddress to a JSON object, such as:
     * 
     * ```json
     * { pSelector: "0102", sSelector: "0304", tSelector: "0506", nAddresses: [ "0708" ] }
     * ```
     * 
     * The `encoding` parameter determines how the `OCTET STRING`s are encoded.
     * 
     * @param encoding The encoding to use for the selectors and network addresses.
     * @returns The JSON object.
     * @private
     * @method
     */
    private toJER(encoding: "base64" | "hex"): PresentationAddressStrings {
        return {
            pSelector: this.pSelector && Buffer.from(this.pSelector).toString(encoding),
            sSelector: this.sSelector && Buffer.from(this.sSelector).toString(encoding),
            tSelector: this.tSelector && Buffer.from(this.tSelector).toString(encoding),
            nAddresses: this.nAddresses.map(address => Buffer.from(address).toString(encoding)),
        };
    }

    /**
     * @summary Converts the PresentationAddress to the JSON Encoding Rules (JER)
     *  encoding using hexadecimal for the `OCTET STRING`s.
     * @description
     * 
     * This converts the PresentationAddress to a JSON Encoding Rules (JER)
     * encoding, such as:
     * 
     * ```json
     * { pSelector: "0102", sSelector: "0304", tSelector: "0506", nAddresses: [ "0708" ] }
     * ```
     * 
     * @returns The JSON object.
     * @public
     * @method
     */
    public toHexadecimalJER(): PresentationAddressStrings {
        return this.toJER("hex");
    }

    /**
     * @summary Converts the PresentationAddress to the JSON Encoding Rules (JER)
     *  encoding using base64 for the `OCTET STRING`s.
     * @description
     * 
     * This converts the PresentationAddress to a JSON Encoding Rules (JER)
     * encoding, such as:
     * 
     * ```json
     * { tSelector: "MTIzNA==", nAddresses: [ "/wABaHR0cHM6Ly9leGFtcGxlLmNvbQ==" ] }
     * ```
     * 
     * @returns The JSON object.
     * @public
     * @method
     */
    public toBase64JER(): PresentationAddressStrings {
        return this.toJER("base64");
    }

    /**
     * @summary Converts the PresentationAddress to the JSON Encoding Rules (JER)
     *  encoding using hexadecimal for the `OCTET STRING`s.
     * @description
     * 
     * This converts the PresentationAddress to a JSON Encoding Rules (JER)
     * encoding, such as:
     * 
     * ```json
     * { pSelector: "0102", sSelector: "0304", tSelector: "0506", nAddresses: [ "0708" ] }
     * ```
     * 
     * @returns The JSON object.
     * @public
     * @method
     */
    public toJSON(): PresentationAddressStrings {
        return this.toHexadecimalJER();
    }

    /**
     * @summary Converts the PresentationAddress to the IETF RFC 1278 string representation.
     * @description
     * 
     * This converts the PresentationAddress to an 
     * [IETF RFC 1278](https://datatracker.ietf.org/doc/html/rfc1278) string.
     * 
     * Examples of the string representations are:
     * 
     * ```text
     * "256"/NS+a433bb93c1_NS+aa3106
     * 
     * #63/#41/#12/X121+234219200300
     * 
     * '3a'H/TELEX+00728722+X.25(80)+02+00002340555+CUDF+"892796"
     * 
     * TELEX+00728722+RFC-1006+03+10.0.0.6
     * ```
     * 
     * If `onlyStandard` is `true`, then only the IETF RFC 1278-standardized
     * syntaxes for representing the network addresses are used; you may wish to
     * set this to `true` if you are exporting a presentation address for
     * consumption between applications, and therefore, if interoperability is
     * important. Leaving this `false` will give you a modern syntaxes for
     * IP addresses and URLs.
     * 
     * For even more interoperable string representations, use
     * {@link toMostInteroperableString}.
     * 
     * ```
     * @param onlyStandard Whether to only use IETF RFC 1278-standardized
     *  syntaxes for representing the network addresses.
     * @returns The RFC 1278 string.
     * @public
     * @method
     */
    public toRfc1278String(onlyStandard: boolean = false): string {
        const components: string[] = [];
        this.pSelector && components.push(selectorToRfc1278String(this.pSelector));
        this.sSelector && components.push(selectorToRfc1278String(this.sSelector));
        this.tSelector && components.push(selectorToRfc1278String(this.tSelector));
        const naddrs = this.nAddresses
            .map((naddr) => onlyStandard
                ? new X213NetworkAddress(naddr).toRfc1278String()
                : new X213NetworkAddress(naddr).toString())
            .join("_")
            ;
        components.push(naddrs);
        return components.join("/");
    }

    /**
     * @summary Converts the PresentationAddress to the most interoperable
     *  IETF RFC 1278 string representation.
     * @description
     * 
     * This converts the PresentationAddress to an IETF RFC 1278 string that is
     * most likely to be interoperable with other applications, such as:
     * 
     * ```text
     * '0102'H/'0304'H/'0506'H/NS+aa3106
     * ```
     * 
     * Only hexadecimal encoding is used for the selectors, and only the "NS+"
     * hexadecimal encoding is used for the network addresses.
     * 
     * If you need user-friendly display, use {@link toString}.
     * 
     * @returns The most interoperable IETF RFC 1278 string.
     * @public
     * @method
     */
    public toMostInteroperableString(): string {
        const components: string[] = [];
        this.pSelector && components.push("'" + Buffer.from(this.pSelector).toString("hex").toUpperCase() + "'H");
        this.sSelector && components.push("'" + Buffer.from(this.sSelector).toString("hex").toUpperCase() + "'H");
        this.tSelector && components.push("'" + Buffer.from(this.tSelector).toString("hex").toUpperCase() + "'H");
        const naddrs = this.nAddresses
            .map((naddr) => new X213NetworkAddress(naddr).toNSString())
            .join("_")
            ;
        components.push(naddrs);
        return components.join("/");
    }

    /**
     * @summary Converts the PresentationAddress to the IETF RFC 1278 string representation.
     * @description
     * 
     * This function is not ideal for interoperability: it is intended for
     * friendly display for humans. For interoperability, use
     * {@link toMostInteroperableString}.
     * 
     * @returns The IETF RFC 1278 string.
     * @public
     * @method
     */
    public toString(): string {
        return this.toRfc1278String(false);
    }

    /**
     * @summary Converts a JSON Encoding Rules (JER) encoding to a PresentationAddress.
     * @description
     * 
     * This converts a JSON Encoding Rules (JER) encoding to a PresentationAddress.
     * 
     * @param json The JSON Encoding Rules (JER) encoding.
     * @param encoding The encoding to use for the selectors and network addresses.
     * @returns The PresentationAddress.
     * @public
     * @method
     */
    public static fromJER(json: PresentationAddressStrings, encoding: "base64" | "hex"): PresentationAddress {
        return new PresentationAddress(
            json.pSelector && Buffer.from(json.pSelector, encoding),
            json.sSelector && Buffer.from(json.sSelector, encoding),
            json.tSelector && Buffer.from(json.tSelector, encoding),
            json.nAddresses.map(address => Buffer.from(address, encoding)),
        );
    }

    /**
     * @summary Converts a JSON Encoding Rules (JER) encoding to a PresentationAddress.
     * @description
     * 
     * This converts a JSON Encoding Rules (JER) encoding to a PresentationAddress,
     * assuming the use of base64 encoding for the selectors and network addresses.
     * 
     * @param json The JSON Encoding Rules (JER) encoding.
     * @returns The PresentationAddress.
     * @public
     * @method
     */
    public static fromBase64JER(json: PresentationAddressStrings): PresentationAddress {
        return PresentationAddress.fromJER(json, "base64");
    }

    /**
     * @summary Converts a JSON Encoding Rules (JER) encoding to a PresentationAddress.
     * @description
     * 
     * This converts a JSON Encoding Rules (JER) encoding to a PresentationAddress,
     * assuming the use of hexadecimal encoding for the selectors and network addresses.
     * 
     * @param json The JSON Encoding Rules (JER) encoding.
     * @returns The PresentationAddress.
     * @public
     * @method
     */
    public static fromHexadecimalJER(json: PresentationAddressStrings): PresentationAddress {
        return PresentationAddress.fromJER(json, "hex");
    }

    /**
     * @summary Splits an IETF RFC 1278 string into its components.
     * @description
     * 
     * This splits an IETF RFC 1278 string into its components without any
     * further decoding or interpretation.
     * 
     * @param s The IETF RFC 1278 string.
     * @returns The components.
     * @public
     * @method
     */
    public static splitRfc1278String(s: string): PresentationAddressStrings {
        const parts = s.split("/");
        const selectors: string[] = [];
        let naddrs_start: number = 0;
        while (
            (parts.length > 0)
            && (selectors.length < 3)
            && (
                // Selectors can be empty or...
                !parts[0][0]
                // ...start with these characters.
                || ["'", '"', "#"].includes(parts[0][0])
            )
        ) {
            const part = parts.shift()!;
            naddrs_start += (part.length + 1);
            selectors.push(part);
        }
        const tstr = selectors.pop();
        const sstr = selectors.pop();
        const pstr = selectors.pop();
        const naddrs_part = s.slice(naddrs_start);
        const naddrs = naddrs_part.split("_");
        return {
            pSelector: pstr,
            sSelector: sstr,
            tSelector: tstr,
            nAddresses: naddrs,
        };
    }

    /**
     * @summary Converts an IETF RFC 1278 string to a PresentationAddress.
     * @description
     * 
     * This converts an IETF RFC 1278 string to a PresentationAddress.
     * 
     * @param s The IETF RFC 1278 string.
     * @returns The PresentationAddress.
     * @public
     * @method
     */
    public static fromRfc1278String(s: string): PresentationAddress | string {
        const strings = PresentationAddress.splitRfc1278String(s);
        const pSelector = (typeof strings.pSelector === "string")
            ? selectorFromRfc1278String(strings.pSelector)
            : undefined
            ;
        if (typeof pSelector === "string") {
            return pSelector;
        }
        const sSelector = (typeof strings.sSelector === "string")
            ? selectorFromRfc1278String(strings.sSelector)
            : undefined
            ;
        if (typeof sSelector === "string") {
            return sSelector;
        }
        const tSelector = (typeof strings.tSelector === "string")
            ? selectorFromRfc1278String(strings.tSelector)
            : undefined
            ;
        if (typeof tSelector === "string") {
            return tSelector
        }
        const naddrs_or_errors = strings
            .nAddresses
            .map((naddr) => X213NetworkAddress.fromString(naddr))
            ;
        const naddr_err = naddrs_or_errors
            .find((naddr) => (typeof naddr === "string"));
        if (naddr_err) {
            return "naddr_" + naddr_err;
        }
        const naddrs = naddrs_or_errors as X213NetworkAddress[];
        return new PresentationAddress(
            pSelector,
            sSelector,
            tSelector,
            naddrs.map(naddr => naddr.getOctets()),
        );
    }

    /**
     * @summary Converts an IETF RFC 1278 string to a PresentationAddress.
     * @description
     * 
     * This converts an IETF RFC 1278 string to a PresentationAddress.
     * 
     * @param s The IETF RFC 1278 string.
     * @returns The PresentationAddress.
     * @public
     * @method
     */
    public static fromString(s: string): PresentationAddress | string {
        return PresentationAddress.fromRfc1278String(s);
    }

    /**
     * @summary Returns `true` if `self` has the same selectors and a subset of
     *  N-addresses of `other`
     * @description
     * 
     * This returns `true` if `self` has the same selectors and a subset of
     * N-addresses of `other`. In this context `subset` means an improper
     * subset: two identical presentation addresses will also return `true`.
     * 
     * Note that the ordering of N-addresses does not matter.
     *
     * In the naming of this function, the term "naively" is used to mean that
     * N-addresses are compared naively: byte-for-byte. This isn't totally
     * accurate, since the same underlying network address could be represented
     * in multiple ways in some cases.
     * 
     * @param other The other PresentationAddress.
     * @returns `true` if `self` has the same selectors and a subset of
     *  N-addresses of `other`; `false` otherwise.
     * @public
     * @method
     */
    public isNaivelySubsetOf(other: PresentationAddress): boolean {
        if (!compareSelectors(this.pSelector, other.pSelector)) {
            return false;
        }
        if (!compareSelectors(this.sSelector, other.sSelector)) {
            return false;
        }
        if (!compareSelectors(this.tSelector, other.tSelector)) {
            return false;
        }
        if (this.nAddresses.length === 0) {
            return false;
        }
        if (other.nAddresses.length === 0) {
            return false;
        }
        // It cannot be a subset of the other if the other has fewer N-addresses
        if (this.nAddresses.length > other.nAddresses.length) {
            return false;
        }
        // TODO: If naddresses.length === 1, we can just compare the strings directly.
        const othern = new Set(
            other
                .nAddresses
                .map(naddr => Buffer.from(naddr).toString("latin1"))
        );
        for (const naddr of this.nAddresses) {
            // TODO: Does this need to be delete()?
            if (!othern.has(Buffer.from(naddr).toString("latin1"))) {
                return false;
            }
        }
        return true;
    }

    /**
     * @summary Returns `true` if `self` has the same selectors and the same
     *  N-addresses of `other`
     * @description
     * 
     * This returns `true` if `self` has the same selectors and the same
     * N-addresses of `other`.
     * 
     * Note that the ordering of N-addresses does not matter.
     * 
     * In the naming of this function, the term "naively" is used to mean that
     * N-addresses are compared naively: byte-for-byte. This isn't totally
     * accurate, since the same underlying network address could be represented
     * in multiple ways in some cases.
     * 
     * @param other The other PresentationAddress.
     * @returns `true` if `self` has the same selectors and the same N-addresses of `other`; `false` otherwise.
     * @public
     * @method
     */
    public isNaivelyExactly(other: PresentationAddress): boolean {
        if (!compareSelectors(this.pSelector, other.pSelector)) {
            return false;
        }
        if (!compareSelectors(this.sSelector, other.sSelector)) {
            return false;
        }
        if (!compareSelectors(this.tSelector, other.tSelector)) {
            return false;
        }
        if (this.nAddresses.length !== other.nAddresses.length) {
            return false;
        }
        const selfn = new Set(
            this.nAddresses.map(naddr => Buffer.from(naddr).toString("latin1"))
        );
        const othern = new Set(
            other.nAddresses.map(naddr => Buffer.from(naddr).toString("latin1"))
        );
        if (selfn.size !== othern.size) {
            return false;
        }
        for (const naddr of selfn.values()) {
            if (!othern.delete(naddr)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @summary Encodes the PresentationAddress into bytes using the distinguished encoding rules (DER).
     * @returns Bytes of the encoded PresentationAddress.
     * @public
     * @method
     */
    public toX690Bytes(): Uint8Array {
        return _encode_PresentationAddress(this).toBytes();
    }

    /**
     * @summary Decodes a PresentationAddress from bytes using the basic encoding rules (BER).
     * @param bytes Bytes of the encoded PresentationAddress.
     * @returns The decoded PresentationAddress.
     * @public
     * @method
     */
    public static fromX690Bytes(bytes: Uint8Array): PresentationAddress {
        const el = new BERElement();
        if (el.fromBytes(bytes) !== bytes.length) {
            throw new Error("Malformed PresentationAddress");
        }
        return _decode_PresentationAddress(el);
    }
}

/**
* @summary The Leading Root Component Types of PresentationAddress
* @description
*
* This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
*
* @constant
*/
export const _root_component_type_list_1_spec_for_PresentationAddress: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "pSelector",
            true,
            $.hasTag(_TagClass.context, 0)
        ),
        new $.ComponentSpec(
            "sSelector",
            true,
            $.hasTag(_TagClass.context, 1)
        ),
        new $.ComponentSpec(
            "tSelector",
            true,
            $.hasTag(_TagClass.context, 2)
        ),
        new $.ComponentSpec(
            "nAddresses",
            false,
            $.hasTag(_TagClass.context, 3)
        ),
    ];

/**
* @summary The Trailing Root Component Types of PresentationAddress
* @description
*
* This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
*
* @constant
*/
export const _root_component_type_list_2_spec_for_PresentationAddress: $.ComponentSpec[] =
    [];

/**
* @summary The Extension Addition Component Types of PresentationAddress
* @description
*
* This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
*
* @constant
*/
export const _extension_additions_list_spec_for_PresentationAddress: $.ComponentSpec[] =
    [];


/**
* @summary Decodes an ASN.1 element into a(n) PresentationAddress
* @function
* @param {_Element} el The element being decoded.
* @returns {PresentationAddress} The decoded data structure.
*/
export function _decode_PresentationAddress(el: _Element): PresentationAddress {
    let pSelector: OPTIONAL<OCTET_STRING>;
    let sSelector: OPTIONAL<OCTET_STRING>;
    let tSelector: OPTIONAL<OCTET_STRING>;
    let nAddresses!: OCTET_STRING[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        pSelector: (_el: _Element): void => {
            pSelector = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(_el);
        },
        sSelector: (_el: _Element): void => {
            sSelector = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(_el);
        },
        tSelector: (_el: _Element): void => {
            tSelector = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(_el);
        },
        nAddresses: (_el: _Element): void => {
            nAddresses = $._decode_explicit<OCTET_STRING[]>(() =>
                $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString)
            )(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PresentationAddress,
        _extension_additions_list_spec_for_PresentationAddress,
        _root_component_type_list_2_spec_for_PresentationAddress,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new PresentationAddress(
        pSelector,
        sSelector,
        tSelector,
        nAddresses,
        _unrecognizedExtensionsList
    );
}

/**
* @summary Encodes a(n) PresentationAddress into an ASN.1 Element.
* @function
* @param value The element being encoded.
* @param elGetter A function that can be used to get new ASN.1 elements.
* @returns {_Element} The PresentationAddress, encoded as an ASN.1 Element.
*/
export function _encode_PresentationAddress(value: PresentationAddress): _Element {
    const components: _Element[] = [];
    if (value.pSelector) {
        const c = $._encode_explicit(
            _TagClass.context,
            0,
            () => $._encodeOctetString,
            $.BER
        )(value.pSelector, $.BER);
        components.push(c);
    }
    if (value.sSelector) {
        const c = $._encode_explicit(
            _TagClass.context,
            1,
            () => $._encodeOctetString,
            $.BER
        )(value.sSelector, $.BER);
        components.push(c);
    }
    if (value.tSelector) {
        const c = $._encode_explicit(
            _TagClass.context,
            2,
            () => $._encodeOctetString,
            $.BER
        )(value.tSelector, $.BER);
        components.push(c);
    }
    components.push($._encode_explicit(
        _TagClass.context,
        3,
        () =>
            $._encodeSetOf<OCTET_STRING>(
                () => $._encodeOctetString,
                $.DER
            ),
        $.BER
    )(value.nAddresses, $.BER));
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}
