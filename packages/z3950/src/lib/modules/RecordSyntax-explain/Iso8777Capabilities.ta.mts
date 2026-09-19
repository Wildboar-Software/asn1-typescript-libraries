/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SearchKey, _decode_SearchKey, _encode_SearchKey } from "../RecordSyntax-explain/SearchKey.ta.mjs";
// export { SearchKey, _decode_SearchKey, _encode_SearchKey } from "../RecordSyntax-explain/SearchKey.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary Iso8777Capabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Iso8777Capabilities ::= SEQUENCE {
 *   searchKeys    [0] IMPLICIT SEQUENCE OF SearchKey,  
 *                       -- field names that may be searched
 *   restrictions  [1] IMPLICIT HumanString OPTIONAL 
 *                       -- Omitted means supported, not specifying units.
 *                      }
 * ```
 * 
 * @class
 */
export
class Iso8777Capabilities {
    constructor (
        /**
         * @summary `searchKeys`.
         * @public
         * @readonly
         */
        readonly searchKeys: SearchKey[],
        /**
         * @summary `restrictions`.
         * @public
         * @readonly
         */
        readonly restrictions: OPTIONAL<HumanString>
    ) {}

    /**
     * @summary Restructures an object into a Iso8777Capabilities
     * @description
     * 
     * This takes an `object` and converts it to a `Iso8777Capabilities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Iso8777Capabilities`.
     * @returns {Iso8777Capabilities}
     */
    public static _from_object (_o: { [_K in keyof (Iso8777Capabilities)]: (Iso8777Capabilities)[_K] }): Iso8777Capabilities {
        return new Iso8777Capabilities(_o.searchKeys, _o.restrictions);
    }


}

/**
 * @summary The Leading Root Component Types of Iso8777Capabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Iso8777Capabilities: $.ComponentSpec[] = [
    new $.ComponentSpec("searchKeys", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("restrictions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Iso8777Capabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Iso8777Capabilities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Iso8777Capabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Iso8777Capabilities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Iso8777Capabilities: $.ASN1Decoder<Iso8777Capabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Iso8777Capabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Iso8777Capabilities (el: _Element): Iso8777Capabilities {
    if (!_cached_decoder_for_Iso8777Capabilities) { _cached_decoder_for_Iso8777Capabilities = function (el: _Element): Iso8777Capabilities {
    let searchKeys!: SearchKey[];
    let restrictions: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "searchKeys": (_el: _Element): void => { searchKeys = $._decode_implicit<SearchKey[]>(() => $._decodeSequenceOf<SearchKey>(() => _decode_SearchKey))(_el); },
        "restrictions": (_el: _Element): void => { restrictions = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Iso8777Capabilities,
        _extension_additions_list_spec_for_Iso8777Capabilities,
        _root_component_type_list_2_spec_for_Iso8777Capabilities,
        undefined,
    );
    return new Iso8777Capabilities(
        searchKeys,
        restrictions
    );
}; }
    return _cached_decoder_for_Iso8777Capabilities(el);
}

let _cached_encoder_for_Iso8777Capabilities: $.ASN1Encoder<Iso8777Capabilities> | null = null;

/**
 * @summary Encodes a(n) Iso8777Capabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Iso8777Capabilities, encoded as an ASN.1 Element.
 */
export
function _encode_Iso8777Capabilities (value: Iso8777Capabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Iso8777Capabilities) { _cached_encoder_for_Iso8777Capabilities = function (value: Iso8777Capabilities, elGetter: $.ASN1Encoder<Iso8777Capabilities>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<SearchKey>(() => _encode_SearchKey, $.BER), $.BER)(value.searchKeys, $.BER),
            /* IF_ABSENT  */ ((value.restrictions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.restrictions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Iso8777Capabilities(value, elGetter);
}


/* eslint-enable */
