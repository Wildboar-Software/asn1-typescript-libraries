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
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../PKIX1Explicit88/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../PKIX1Explicit88/DirectoryString.ta.mjs";


/**
 * @summary EDIPartyName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDIPartyName ::= SEQUENCE {
 *      nameAssigner            [0]     DirectoryString OPTIONAL,
 *      partyName               [1]     DirectoryString }
 * ```
 * 
 * @class
 */
export
class EDIPartyName {
    constructor (
        /**
         * @summary `nameAssigner`.
         * @public
         * @readonly
         */
        readonly nameAssigner: OPTIONAL<DirectoryString>,
        /**
         * @summary `partyName`.
         * @public
         * @readonly
         */
        readonly partyName: DirectoryString
    ) {}

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
    public static _from_object (_o: { [_K in keyof (EDIPartyName)]: (EDIPartyName)[_K] }): EDIPartyName {
        return new EDIPartyName(_o.nameAssigner, _o.partyName);
    }


}

/**
 * @summary The Leading Root Component Types of EDIPartyName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EDIPartyName: $.ComponentSpec[] = [
    new $.ComponentSpec("nameAssigner", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partyName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EDIPartyName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EDIPartyName: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EDIPartyName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EDIPartyName: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EDIPartyName: $.ASN1Decoder<EDIPartyName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIPartyName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDIPartyName (el: _Element): EDIPartyName {
    if (!_cached_decoder_for_EDIPartyName) { _cached_decoder_for_EDIPartyName = function (el: _Element): EDIPartyName {
    let nameAssigner: OPTIONAL<DirectoryString>;
    let partyName!: DirectoryString;
    const callbacks: $.DecodingMap = {
        "nameAssigner": (_el: _Element): void => { nameAssigner = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "partyName": (_el: _Element): void => { partyName = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EDIPartyName,
        _extension_additions_list_spec_for_EDIPartyName,
        _root_component_type_list_2_spec_for_EDIPartyName,
        undefined,
    );
    return new EDIPartyName(
        nameAssigner,
        partyName
    );
}; }
    return _cached_decoder_for_EDIPartyName(el);
}

let _cached_encoder_for_EDIPartyName: $.ASN1Encoder<EDIPartyName> | null = null;

/**
 * @summary Encodes a(n) EDIPartyName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIPartyName, encoded as an ASN.1 Element.
 */
export
function _encode_EDIPartyName (value: EDIPartyName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDIPartyName) { _cached_encoder_for_EDIPartyName = function (value: EDIPartyName, elGetter: $.ASN1Encoder<EDIPartyName>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.nameAssigner === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DirectoryString, $.BER)(value.nameAssigner, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DirectoryString, $.BER)(value.partyName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EDIPartyName(value, elGetter);
}


/* eslint-enable */
