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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { EscapeRegisterID, _decode_EscapeRegisterID, _encode_EscapeRegisterID } from "../CSTA-escape-types/EscapeRegisterID.ta.mjs";
// export { EscapeRegisterID, _decode_EscapeRegisterID, _encode_EscapeRegisterID } from "../CSTA-escape-types/EscapeRegisterID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary EscapeRegisterCancelArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterCancelArgument ::= SEQUENCE 
 * {    escapeRegisterID        EscapeRegisterID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class EscapeRegisterCancelArgument {
    constructor (
        /**
         * @summary `escapeRegisterID`.
         * @public
         * @readonly
         */
        readonly escapeRegisterID: EscapeRegisterID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a EscapeRegisterCancelArgument
     * @description
     * 
     * This takes an `object` and converts it to a `EscapeRegisterCancelArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EscapeRegisterCancelArgument`.
     * @returns {EscapeRegisterCancelArgument}
     */
    public static _from_object (_o: { [_K in keyof (EscapeRegisterCancelArgument)]: (EscapeRegisterCancelArgument)[_K] }): EscapeRegisterCancelArgument {
        return new EscapeRegisterCancelArgument(_o.escapeRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of EscapeRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EscapeRegisterCancelArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("escapeRegisterID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EscapeRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EscapeRegisterCancelArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EscapeRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EscapeRegisterCancelArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EscapeRegisterCancelArgument: $.ASN1Decoder<EscapeRegisterCancelArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterCancelArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterCancelArgument (el: _Element): EscapeRegisterCancelArgument {
    if (!_cached_decoder_for_EscapeRegisterCancelArgument) { _cached_decoder_for_EscapeRegisterCancelArgument = function (el: _Element): EscapeRegisterCancelArgument {
    let escapeRegisterID!: EscapeRegisterID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "escapeRegisterID": (_el: _Element): void => { escapeRegisterID = _decode_EscapeRegisterID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EscapeRegisterCancelArgument,
        _extension_additions_list_spec_for_EscapeRegisterCancelArgument,
        _root_component_type_list_2_spec_for_EscapeRegisterCancelArgument,
        undefined,
    );
    return new EscapeRegisterCancelArgument(
        escapeRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_EscapeRegisterCancelArgument(el);
}

let _cached_encoder_for_EscapeRegisterCancelArgument: $.ASN1Encoder<EscapeRegisterCancelArgument> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterCancelArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterCancelArgument, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterCancelArgument (value: EscapeRegisterCancelArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterCancelArgument) { _cached_encoder_for_EscapeRegisterCancelArgument = function (value: EscapeRegisterCancelArgument, elGetter: $.ASN1Encoder<EscapeRegisterCancelArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EscapeRegisterID(value.escapeRegisterID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EscapeRegisterCancelArgument(value, elGetter);
}


/* eslint-enable */
