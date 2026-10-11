/* eslint-disable */
import {
    ASN1Construction as _Construction,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1UniversalType as _UniversalType,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { prepString } from "@wildboar/dn";
import {
    tlvLength,
    utf8ByteLength,
    definiteElementLength,
} from "./encodedLength.mjs";
import {
    type UnboundedDirectoryString,
    type UnboundedDirectoryStringJSON,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    unboundedDirectoryStringFromJSON,
    unboundedDirectoryStringToJSON,
    unboundedDirectoryStringToString,
} from "./UnboundedDirectoryString.ta.mjs";

/**
 * JSON encoding of {@link EDIPartyName}. `nameAssigner` is omitted when the
 * component is absent. Each directory string keeps its CHOICE alternative.
 */
export type EDIPartyNameJSON = {
    nameAssigner?: UnboundedDirectoryStringJSON;
    partyName: UnboundedDirectoryStringJSON;
};

/**
 * @summary EDIPartyName
 * @description
 *
 * Electronic Data Interchange (EDI) party name.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIPartyName ::= SEQUENCE {
 *   nameAssigner  [0]  UnboundedDirectoryString OPTIONAL,
 *   partyName     [1]  UnboundedDirectoryString,
 *   ... }
 * ```
 *
 */
export class EDIPartyName {
    /**
     * @summary `nameAssigner`.
     * @public
     * @readonly
     */
    public readonly nameAssigner: OPTIONAL<UnboundedDirectoryString>;
    /**
     * @summary `partyName`.
     * @public
     * @readonly
     */
    public readonly partyName: UnboundedDirectoryString;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        nameAssigner: OPTIONAL<UnboundedDirectoryString>,
        partyName: UnboundedDirectoryString,
        _unrecognizedExtensionsList: _Element[] = [],
    ) {
        this.nameAssigner = nameAssigner;
        this.partyName = partyName;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EDIPartyName
     * @description
     *
     * This takes an `object` and converts it to a `EDIPartyName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIPartyName`.
     * @returns {EDIPartyName}
     */
    public static _from_object(
        _o: { [_K in keyof EDIPartyName]: EDIPartyName[_K] },
    ): EDIPartyName {
        return new EDIPartyName(
            _o.nameAssigner,
            _o.partyName,
            _o._unrecognizedExtensionsList,
        );
    }

    /**
     * @summary Print this EDI party name
     * @description
     *
     * `nameAssigner` is left out when it is absent. Strings are JSON-escaped,
     * so a quote or backslash inside a name cannot be mistaken for the
     * surrounding syntax. This is not a reversible encoding.
     *
     * @returns `{ nameAssigner:"...", partyName:"..." }`, or `{ partyName:"..." }`
     * @function
     * @public
     */
    public toString(): string {
        const party: string = JSON.stringify(unboundedDirectoryStringToString(this.partyName));
        if (this.nameAssigner) {
            const assigner: string = JSON.stringify(
                unboundedDirectoryStringToString(this.nameAssigner),
            );
            return `{ nameAssigner:${assigner}, partyName:${party} }`;
        }
        return `{ partyName:${party} }`;
    }

    /**
     * @summary Textual ASN.1 value notation for this EDI party name
     * @description
     *
     * Each directory string is written as its CHOICE alternative and a quoted
     * character string. A quotation mark inside a string is doubled, which is
     * the ASN.1 convention. TeletexString is transcoded to characters first.
     * Unrecognized extensions are not included. This is a readable
     * approximation, not a guaranteed parseable value.
     *
     * @returns `{ nameAssigner uTF8String : "...", partyName printableString : "..." }`
     * @function
     * @public
     */
    public toASN1String(): string {
        const party: string = directoryStringToASN1(this.partyName);
        if (this.nameAssigner) {
            return `{ nameAssigner ${directoryStringToASN1(this.nameAssigner)}, partyName ${party} }`;
        }
        return `{ partyName ${party} }`;
    }

    /**
     * @summary Convert this `EDIPartyName` to JSON
     * @description
     *
     * `UnboundedDirectoryString` choices are encoded as a single-member object,
     * and TeletexString octets are hexadecimal, so {@link EDIPartyName.fromJSON}
     * can reverse this. Absent optional components are omitted. Unrecognized
     * extensions are not included.
     *
     * @returns The JSON encoding of this value
     * @function
     * @public
     */
    public toJSON(): EDIPartyNameJSON {
        const json: EDIPartyNameJSON = {
            partyName: unboundedDirectoryStringToJSON(this.partyName),
        };
        if (this.nameAssigner) {
            json.nameAssigner = unboundedDirectoryStringToJSON(this.nameAssigner);
        }
        return json;
    }

    /**
     * @summary Decode a JSON encoding of an `EDIPartyName`
     * @param json The JSON encoding of this value
     * @returns The decoded `EDIPartyName`
     * @throws {SyntaxError} If `partyName` is missing or a string is malformed
     * @function
     * @public
     * @static
     */
    public static fromJSON(json: EDIPartyNameJSON): EDIPartyName {
        if (
            (typeof json !== "object")
            || (json === null)
            || (json.partyName === undefined)
        ) {
            throw new SyntaxError("invalid EDIPartyName json");
        }
        return new EDIPartyName(
            json.nameAssigner
                ? unboundedDirectoryStringFromJSON(json.nameAssigner)
                : undefined,
            unboundedDirectoryStringFromJSON(json.partyName),
        );
    }

    /**
     * @summary A key for many-to-many comparison
     * @description
     *
     * Both strings are prepared with {@link prepString} (`caseFold: true`),
     * which is what {@link isEqualTo} compares. Building the string allocates;
     * that is expected, because the key is meant for a `Map` or a `Set`.
     *
     * `JSON.stringify` of `[nameAssigner, partyName]` keeps the two fields
     * from running together. A missing `nameAssigner` is `null`. A string
     * that string preparation rejects is kept, prefixed by a NUL, so it cannot
     * collide with a prepared string (preparation deletes NUL) and so two
     * rejected strings still compare unequal when their text differs.
     *
     * @returns A string that is equal exactly when {@link isEqualTo} is true
     * @function
     * @public
     */
    public toKey(): string {
        return JSON.stringify([
            this.nameAssigner ? keyComponent(this.nameAssigner) : null,
            keyComponent(this.partyName),
        ]);
    }

    /**
     * @summary Compare this EDI party name with another, one to one
     * @description
     *
     * Case-ignore matching, per the usual directory-string rule for this
     * name form (RFC 5280). A missing `nameAssigner` matches only another
     * missing one.
     *
     * Both strings are turned into text with `unboundedDirectoryStringToString`.
     * Identical raw text matches without string preparation. Otherwise both
     * strings are prepared with {@link prepString} (`caseFold: true`), which
     * allocates.
     *
     * The result agrees with comparing {@link toKey} output.
     *
     * @param other The other EDI party name
     * @returns `true` if the names match
     * @function
     * @public
     */
    public isEqualTo(other: EDIPartyName): boolean {
        return directoryStringsEqual(this.nameAssigner, other.nameAssigner)
            && directoryStringsEqual(this.partyName, other.partyName);
    }

    /**
     * @summary Length of the BER encoding, without encoding
     * @description
     *
     * Definite lengths throughout. Each directory string is sized from its
     * character width (UTF-8, one byte per PrintableString character, two per
     * BMPString character, four per UniversalString character, or the Teletex
     * octet count) and wrapped in its explicit `[0]` or `[1]` tag.
     * Unrecognized extensions contribute their encoded length.
     *
     * @returns The number of bytes `_encode_EDIPartyName` would produce
     * @function
     * @public
     */
    public getEncodedLength(): number {
        let content: number = 0;
        if (this.nameAssigner) {
            content += explicitDirectoryStringLength(this.nameAssigner);
        }
        content += explicitDirectoryStringLength(this.partyName);
        const extensions: _Element[] = this._unrecognizedExtensionsList;
        for (let i: number = 0; i < extensions.length; i++) {
            const ext: _Element | undefined = extensions[i];
            if (ext) {
                content += definiteElementLength(ext);
            }
        }
        return tlvLength(1, content);
    }
}

/**
 * @summary The Leading Root Component Types of EDIPartyName
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIPartyName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nameAssigner",
        true,
        $.hasTag(_TagClass.context, 0),
    ),
    new $.ComponentSpec(
        "partyName",
        false,
        $.hasTag(_TagClass.context, 1),
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIPartyName
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIPartyName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIPartyName
 * @constant
 */
export const _extension_additions_list_spec_for_EDIPartyName: $.ComponentSpec[] = [];

/**
 * @summary Decodes an ASN.1 element into a(n) EDIPartyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIPartyName} The decoded data structure.
 */
export function _decode_EDIPartyName(el: _Element): EDIPartyName {
    let nameAssigner: OPTIONAL<UnboundedDirectoryString>;
    let partyName!: UnboundedDirectoryString;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        nameAssigner: (_el: _Element): void => {
            nameAssigner = $._decode_explicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString,
            )(_el);
        },
        partyName: (_el: _Element): void => {
            partyName = $._decode_explicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString,
            )(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EDIPartyName,
        _extension_additions_list_spec_for_EDIPartyName,
        _root_component_type_list_2_spec_for_EDIPartyName,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        },
    );
    return new EDIPartyName(
        nameAssigner,
        partyName,
        _unrecognizedExtensionsList,
    );
}

/**
 * @summary Encodes a(n) EDIPartyName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIPartyName, encoded as an ASN.1 Element.
 */
export function _encode_EDIPartyName(
    value: EDIPartyName,
    elGetter: $.ASN1Encoder<EDIPartyName>,
): _Element {
    const components: _Element[] = [];
    if (value.nameAssigner !== undefined) {
        components.push(
            $._encode_explicit(
                _TagClass.context,
                0,
                () => _encode_UnboundedDirectoryString,
                elGetter,
            )(value.nameAssigner, elGetter),
        );
    }
    components.push(
        $._encode_explicit(
            _TagClass.context,
            1,
            () => _encode_UnboundedDirectoryString,
            elGetter,
        )(value.partyName, elGetter),
    );
    components.push(...value._unrecognizedExtensionsList);
    const el: _Element = elGetter(value, elGetter);
    el.sequence = components;
    el.tagClass = _TagClass.universal;
    el.construction = _Construction.constructed;
    el.tagNumber = _UniversalType.sequence;
    return el;
}

function quoteAsn1(s: string): string {
    return `"${s.replaceAll('"', '""')}"`;
}

function directoryStringToASN1(ds: UnboundedDirectoryString): string {
    const text: string = quoteAsn1(unboundedDirectoryStringToString(ds));
    if ("teletexString" in ds) {
        return `teletexString : ${text}`;
    }
    if ("printableString" in ds) {
        return `printableString : ${text}`;
    }
    if ("bmpString" in ds) {
        return `bmpString : ${text}`;
    }
    if ("universalString" in ds) {
        return `universalString : ${text}`;
    }
    return `uTF8String : ${text}`;
}

function keyComponent(ds: UnboundedDirectoryString): string {
    const text: string = unboundedDirectoryStringToString(ds);
    const prepared: string | undefined = prepString(text, { caseFold: true });
    return prepared === undefined ? `\u0000${text}` : prepared;
}

function preparedEqual(a: string | undefined, b: string | undefined, rawA: string, rawB: string): boolean {
    if (a === undefined || b === undefined) {
        return a === undefined && b === undefined && rawA === rawB;
    }
    return a === b;
}

function directoryStringsEqual(
    a: UnboundedDirectoryString | undefined,
    b: UnboundedDirectoryString | undefined,
): boolean {
    if (a === undefined || b === undefined) {
        return a === b;
    }
    const rawA: string = unboundedDirectoryStringToString(a);
    const rawB: string = unboundedDirectoryStringToString(b);
    if (rawA === rawB) {
        return true;
    }
    return preparedEqual(
        prepString(rawA, { caseFold: true }),
        prepString(rawB, { caseFold: true }),
        rawA,
        rawB,
    );
}

function directoryStringContentLength(ds: UnboundedDirectoryString): number {
    if ("teletexString" in ds) {
        return ds.teletexString.length;
    }
    if ("bmpString" in ds) {
        return ds.bmpString.length * 2;
    }
    if ("universalString" in ds) {
        return ds.universalString.length * 4;
    }
    if ("printableString" in ds) {
        return utf8ByteLength(ds.printableString);
    }
    return utf8ByteLength(ds.uTF8String);
}

function explicitDirectoryStringLength(ds: UnboundedDirectoryString): number {
    // The string's own universal tag and the explicit context tag are each
    // one octet (every directory-string tag, and context 0 and 1, is below 31).
    return tlvLength(1, tlvLength(1, directoryStringContentLength(ds)));
}

/* eslint-enable */
