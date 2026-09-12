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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";
// export { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";


/**
 * @summary Confirmed_ErrorPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confirmed-ErrorPDU ::= SEQUENCE {
 *    invokeID                   [0] IMPLICIT Unsigned32,
 *    modifierPosition           [1] IMPLICIT Unsigned32 OPTIONAL,
 *    serviceError               [2] IMPLICIT ServiceError
 *    }
 * ```
 * 
 * @class
 */
export
class Confirmed_ErrorPDU {
    constructor (
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: Unsigned32,
        /**
         * @summary `modifierPosition`.
         * @public
         * @readonly
         */
        readonly modifierPosition: OPTIONAL<Unsigned32>,
        /**
         * @summary `serviceError`.
         * @public
         * @readonly
         */
        readonly serviceError: ServiceError
    ) {}

    /**
     * @summary Restructures an object into a Confirmed_ErrorPDU
     * @description
     * 
     * This takes an `object` and converts it to a `Confirmed_ErrorPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Confirmed_ErrorPDU`.
     * @returns {Confirmed_ErrorPDU}
     */
    public static _from_object (_o: { [_K in keyof (Confirmed_ErrorPDU)]: (Confirmed_ErrorPDU)[_K] }): Confirmed_ErrorPDU {
        return new Confirmed_ErrorPDU(_o.invokeID, _o.modifierPosition, _o.serviceError);
    }


}

/**
 * @summary The Leading Root Component Types of Confirmed_ErrorPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Confirmed_ErrorPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("modifierPosition", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceError", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Confirmed_ErrorPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Confirmed_ErrorPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Confirmed_ErrorPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Confirmed_ErrorPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Confirmed_ErrorPDU: $.ASN1Decoder<Confirmed_ErrorPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Confirmed_ErrorPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Confirmed_ErrorPDU (el: _Element): Confirmed_ErrorPDU {
    if (!_cached_decoder_for_Confirmed_ErrorPDU) { _cached_decoder_for_Confirmed_ErrorPDU = function (el: _Element): Confirmed_ErrorPDU {
    let invokeID!: Unsigned32;
    let modifierPosition: OPTIONAL<Unsigned32>;
    let serviceError!: ServiceError;
    const callbacks: $.DecodingMap = {
        "invokeID": (_el: _Element): void => { invokeID = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "modifierPosition": (_el: _Element): void => { modifierPosition = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "serviceError": (_el: _Element): void => { serviceError = $._decode_implicit<ServiceError>(() => _decode_ServiceError)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Confirmed_ErrorPDU,
        _extension_additions_list_spec_for_Confirmed_ErrorPDU,
        _root_component_type_list_2_spec_for_Confirmed_ErrorPDU,
        undefined,
    );
    return new Confirmed_ErrorPDU(
        invokeID,
        modifierPosition,
        serviceError
    );
}; }
    return _cached_decoder_for_Confirmed_ErrorPDU(el);
}

let _cached_encoder_for_Confirmed_ErrorPDU: $.ASN1Encoder<Confirmed_ErrorPDU> | null = null;

/**
 * @summary Encodes a(n) Confirmed_ErrorPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Confirmed_ErrorPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Confirmed_ErrorPDU (value: Confirmed_ErrorPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Confirmed_ErrorPDU) { _cached_encoder_for_Confirmed_ErrorPDU = function (value: Confirmed_ErrorPDU, elGetter: $.ASN1Encoder<Confirmed_ErrorPDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.invokeID, $.BER),
            /* IF_ABSENT  */ ((value.modifierPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.modifierPosition, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceError, $.BER)(value.serviceError, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Confirmed_ErrorPDU(value, elGetter);
}


/* eslint-enable */
