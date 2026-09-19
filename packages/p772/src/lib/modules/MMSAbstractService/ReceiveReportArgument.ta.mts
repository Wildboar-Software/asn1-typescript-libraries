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
import { InformationObject, _decode_InformationObject, _encode_InformationObject } from "../MMSInformationObjects/InformationObject.ta.mjs";
// export { InformationObject, _decode_InformationObject, _encode_InformationObject } from "../MMSInformationObjects/InformationObject.ta.mjs";


/**
 * @summary ReceiveReportArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceiveReportArgument ::= SET {
 *   envelope            [0]  ReportDeliveryEnvelope,
 *   undelivered-object  [1]  InformationObject OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ReceiveReportArgument {
    constructor (
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: ReportDeliveryEnvelope,
        /**
         * @summary `undelivered_object`.
         * @public
         * @readonly
         */
        readonly undelivered_object: OPTIONAL<InformationObject>
    ) {}

    /**
     * @summary Restructures an object into a ReceiveReportArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReceiveReportArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiveReportArgument`.
     * @returns {ReceiveReportArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReceiveReportArgument)]: (ReceiveReportArgument)[_K] }): ReceiveReportArgument {
        return new ReceiveReportArgument(_o.envelope, _o.undelivered_object);
    }


}

/**
 * @summary The Leading Root Component Types of ReceiveReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReceiveReportArgument: $.ComponentSpec[] = [
    /* FIXME: envelope COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("undelivered-object", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReceiveReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReceiveReportArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReceiveReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReceiveReportArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReceiveReportArgument: $.ASN1Decoder<ReceiveReportArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiveReportArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceiveReportArgument (el: _Element): ReceiveReportArgument {
    if (!_cached_decoder_for_ReceiveReportArgument) { _cached_decoder_for_ReceiveReportArgument = function (el: _Element): ReceiveReportArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: ReportDeliveryEnvelope;
    let undelivered_object: OPTIONAL<InformationObject>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<ReportDeliveryEnvelope>(() => _decode_ReportDeliveryEnvelope)(_el); },
        "undelivered-object": (_el: _Element): void => { undelivered_object = $._decode_explicit<InformationObject>(() => _decode_InformationObject)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ReceiveReportArgument,
        _extension_additions_list_spec_for_ReceiveReportArgument,
        _root_component_type_list_2_spec_for_ReceiveReportArgument,
        undefined,
    );
    return new ReceiveReportArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        undelivered_object
    );
}; }
    return _cached_decoder_for_ReceiveReportArgument(el);
}

let _cached_encoder_for_ReceiveReportArgument: $.ASN1Encoder<ReceiveReportArgument> | null = null;

/**
 * @summary Encodes a(n) ReceiveReportArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiveReportArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReceiveReportArgument (value: ReceiveReportArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceiveReportArgument) { _cached_encoder_for_ReceiveReportArgument = function (value: ReceiveReportArgument, elGetter: $.ASN1Encoder<ReceiveReportArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReportDeliveryEnvelope, $.BER)(value.envelope, $.BER),
            /* IF_ABSENT  */ ((value.undelivered_object === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_InformationObject, $.BER)(value.undelivered_object, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReceiveReportArgument(value, elGetter);
}


/* eslint-enable */
