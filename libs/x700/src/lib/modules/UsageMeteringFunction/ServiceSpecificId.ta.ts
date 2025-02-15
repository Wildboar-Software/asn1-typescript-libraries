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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { UMF_SERVICE } from '../UsageMeteringFunction/UMF-SERVICE.oca';
export { UMF_SERVICE } from '../UsageMeteringFunction/UMF-SERVICE.oca';
import { ServiceSpecificSet } from '../UsageMeteringFunction/ServiceSpecificSet.osa';
export { ServiceSpecificSet } from '../UsageMeteringFunction/ServiceSpecificSet.osa';

/* START_OF_SYMBOL_DEFINITION ServiceSpecificId */
/**
 * @summary ServiceSpecificId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceSpecificId ::= SEQUENCE {
 *   service            UMF-SERVICE.&id({ServiceSpecificSet}),
 *   serviceSpecificId  UMF-SERVICE.&Value({ServiceSpecificSet}{@.service})
 * }
 * ```
 *
 * @class
 */
export class ServiceSpecificId {
    constructor(
        /**
         * @summary `service`.
         * @public
         * @readonly
         */
        readonly service: OBJECT_IDENTIFIER,
        /**
         * @summary `serviceSpecificId`.
         * @public
         * @readonly
         */
        readonly serviceSpecificId: _Element
    ) {}

    /**
     * @summary Restructures an object into a ServiceSpecificId
     * @description
     *
     * This takes an `object` and converts it to a `ServiceSpecificId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceSpecificId`.
     * @returns {ServiceSpecificId}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceSpecificId]: ServiceSpecificId[_K] }
    ): ServiceSpecificId {
        return new ServiceSpecificId(_o.service, _o.serviceSpecificId);
    }
}
/* END_OF_SYMBOL_DEFINITION ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceSpecificId */
/**
 * @summary The Leading Root Component Types of ServiceSpecificId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceSpecificId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'service',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'serviceSpecificId',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceSpecificId */
/**
 * @summary The Trailing Root Component Types of ServiceSpecificId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceSpecificId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceSpecificId */
/**
 * @summary The Extension Addition Component Types of ServiceSpecificId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceSpecificId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceSpecificId */
let _cached_decoder_for_ServiceSpecificId: $.ASN1Decoder<ServiceSpecificId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceSpecificId */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceSpecificId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceSpecificId} The decoded data structure.
 */
export function _decode_ServiceSpecificId(el: _Element) {
    if (!_cached_decoder_for_ServiceSpecificId) {
        _cached_decoder_for_ServiceSpecificId = function (
            el: _Element
        ): ServiceSpecificId {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ServiceSpecificId contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'service';
            sequence[1].name = 'serviceSpecificId';
            let service!: OBJECT_IDENTIFIER;
            let serviceSpecificId!: _Element;
            service = $._decodeObjectIdentifier(sequence[0]);
            serviceSpecificId = $._decodeAny(sequence[1]);
            return new ServiceSpecificId(service, serviceSpecificId);
        };
    }
    return _cached_decoder_for_ServiceSpecificId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceSpecificId */
let _cached_encoder_for_ServiceSpecificId: $.ASN1Encoder<ServiceSpecificId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceSpecificId */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceSpecificId */
/**
 * @summary Encodes a(n) ServiceSpecificId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceSpecificId, encoded as an ASN.1 Element.
 */
export function _encode_ServiceSpecificId(
    value: ServiceSpecificId,
    elGetter: $.ASN1Encoder<ServiceSpecificId>
) {
    if (!_cached_encoder_for_ServiceSpecificId) {
        _cached_encoder_for_ServiceSpecificId = function (
            value: ServiceSpecificId,
            elGetter: $.ASN1Encoder<ServiceSpecificId>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.service,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.serviceSpecificId,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceSpecificId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceSpecificId */

/* eslint-enable */
