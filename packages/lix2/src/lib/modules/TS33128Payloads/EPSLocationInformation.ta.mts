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
import { MMELocationInformation, _decode_MMELocationInformation, _encode_MMELocationInformation } from "../TS33128Payloads/MMELocationInformation.ta.mjs";
// export { MMELocationInformation, _decode_MMELocationInformation, _encode_MMELocationInformation } from "../TS33128Payloads/MMELocationInformation.ta.mjs";
import { SGSNLocationInformation, _decode_SGSNLocationInformation, _encode_SGSNLocationInformation } from "../TS33128Payloads/SGSNLocationInformation.ta.mjs";
// export { SGSNLocationInformation, _decode_SGSNLocationInformation, _encode_SGSNLocationInformation } from "../TS33128Payloads/SGSNLocationInformation.ta.mjs";


/**
 * @summary EPSLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSLocationInformation ::= SEQUENCE
 * {
 *     mMELocationInformation  [1] MMELocationInformation OPTIONAL,
 *     sGSNLocationInformation [2] SGSNLocationInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSLocationInformation {
    constructor (
        /**
         * @summary `mMELocationInformation`.
         * @public
         * @readonly
         */
        readonly mMELocationInformation: OPTIONAL<MMELocationInformation>,
        /**
         * @summary `sGSNLocationInformation`.
         * @public
         * @readonly
         */
        readonly sGSNLocationInformation: OPTIONAL<SGSNLocationInformation>
    ) {}

    /**
     * @summary Restructures an object into a EPSLocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `EPSLocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSLocationInformation`.
     * @returns {EPSLocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (EPSLocationInformation)]: (EPSLocationInformation)[_K] }): EPSLocationInformation {
        return new EPSLocationInformation(_o.mMELocationInformation, _o.sGSNLocationInformation);
    }


}

/**
 * @summary The Leading Root Component Types of EPSLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSLocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("mMELocationInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sGSNLocationInformation", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EPSLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSLocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSLocationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSLocationInformation: $.ASN1Decoder<EPSLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSLocationInformation (el: _Element): EPSLocationInformation {
    if (!_cached_decoder_for_EPSLocationInformation) { _cached_decoder_for_EPSLocationInformation = function (el: _Element): EPSLocationInformation {
    let mMELocationInformation: OPTIONAL<MMELocationInformation>;
    let sGSNLocationInformation: OPTIONAL<SGSNLocationInformation>;
    const callbacks: $.DecodingMap = {
        "mMELocationInformation": (_el: _Element): void => { mMELocationInformation = $._decode_implicit<MMELocationInformation>(() => _decode_MMELocationInformation)(_el); },
        "sGSNLocationInformation": (_el: _Element): void => { sGSNLocationInformation = $._decode_implicit<SGSNLocationInformation>(() => _decode_SGSNLocationInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSLocationInformation,
        _extension_additions_list_spec_for_EPSLocationInformation,
        _root_component_type_list_2_spec_for_EPSLocationInformation,
        undefined,
    );
    return new EPSLocationInformation(
        mMELocationInformation,
        sGSNLocationInformation
    );
}; }
    return _cached_decoder_for_EPSLocationInformation(el);
}

let _cached_encoder_for_EPSLocationInformation: $.ASN1Encoder<EPSLocationInformation> | null = null;

/**
 * @summary Encodes a(n) EPSLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EPSLocationInformation (value: EPSLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSLocationInformation) { _cached_encoder_for_EPSLocationInformation = function (value: EPSLocationInformation, elGetter: $.ASN1Encoder<EPSLocationInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mMELocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MMELocationInformation, $.BER)(value.mMELocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.sGSNLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SGSNLocationInformation, $.BER)(value.sGSNLocationInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSLocationInformation(value, elGetter);
}


/* eslint-enable */
