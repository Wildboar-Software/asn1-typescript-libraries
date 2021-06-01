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
import {
    DeliveryServiceType,
    DeliveryServiceType_mhs_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    mhs_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_physical_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_telex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_teletex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_g3_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g3_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_g4_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g4_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_videotex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_telephone_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telephone_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_other_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    other_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliveryServiceType,
    _encode_DeliveryServiceType,
} from '../MhsAcctAsn1Module/DeliveryServiceType.ta';
export {
    DeliveryServiceType,
    DeliveryServiceType_mhs_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    mhs_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_physical_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_telex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_teletex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_g3_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g3_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_g4_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g4_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_videotex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_telephone_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telephone_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryServiceType_other_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    other_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliveryServiceType,
    _encode_DeliveryServiceType,
} from '../MhsAcctAsn1Module/DeliveryServiceType.ta';
import {
    PerMessageComponentRate,
    _decode_PerMessageComponentRate,
    _encode_PerMessageComponentRate,
} from '../MhsAcctAsn1Module/PerMessageComponentRate.ta';
export {
    PerMessageComponentRate,
    _decode_PerMessageComponentRate,
    _encode_PerMessageComponentRate,
} from '../MhsAcctAsn1Module/PerMessageComponentRate.ta';
import {
    PerOctetComponentRate,
    _decode_PerOctetComponentRate,
    _encode_PerOctetComponentRate,
} from '../MhsAcctAsn1Module/PerOctetComponentRate.ta';
export {
    PerOctetComponentRate,
    _decode_PerOctetComponentRate,
    _encode_PerOctetComponentRate,
} from '../MhsAcctAsn1Module/PerOctetComponentRate.ta';

/* START_OF_SYMBOL_DEFINITION DeliveryService */
/**
 * @summary DeliveryService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryService ::= SET {
 *   delivery-service-type       DeliveryServiceType,
 *   per-message-component-rate  [1]  PerMessageComponentRate OPTIONAL,
 *   per-octet-component-rate    [2]  PerOctetComponentRate OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliveryService {
    constructor(
        /**
         * @summary `delivery_service_type`.
         * @public
         * @readonly
         */
        readonly delivery_service_type: DeliveryServiceType,
        /**
         * @summary `per_message_component_rate`.
         * @public
         * @readonly
         */
        readonly per_message_component_rate: OPTIONAL<PerMessageComponentRate>,
        /**
         * @summary `per_octet_component_rate`.
         * @public
         * @readonly
         */
        readonly per_octet_component_rate: OPTIONAL<PerOctetComponentRate>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryService
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryService`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryService`.
     * @returns {DeliveryService}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryService]: DeliveryService[_K] }
    ): DeliveryService {
        return new DeliveryService(
            _o.delivery_service_type,
            _o.per_message_component_rate,
            _o.per_octet_component_rate
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DeliveryService */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryService */
/**
 * @summary The Leading Root Component Types of DeliveryService
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryService: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'delivery-service-type',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-message-component-rate',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-octet-component-rate',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryService */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryService */
/**
 * @summary The Trailing Root Component Types of DeliveryService
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryService: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryService */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryService */
/**
 * @summary The Extension Addition Component Types of DeliveryService
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryService: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryService */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryService */
let _cached_decoder_for_DeliveryService: $.ASN1Decoder<DeliveryService> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryService */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryService */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryService} The decoded data structure.
 */
export function _decode_DeliveryService(el: _Element) {
    if (!_cached_decoder_for_DeliveryService) {
        _cached_decoder_for_DeliveryService = function (
            el: _Element
        ): DeliveryService {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let delivery_service_type!: DeliveryServiceType;
            let per_message_component_rate: OPTIONAL<PerMessageComponentRate>;
            let per_octet_component_rate: OPTIONAL<PerOctetComponentRate>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'delivery-service-type': (_el: _Element): void => {
                    delivery_service_type = _decode_DeliveryServiceType(_el);
                },
                'per-message-component-rate': (_el: _Element): void => {
                    per_message_component_rate = $._decode_implicit<PerMessageComponentRate>(
                        () => _decode_PerMessageComponentRate
                    )(_el);
                },
                'per-octet-component-rate': (_el: _Element): void => {
                    per_octet_component_rate = $._decode_implicit<PerOctetComponentRate>(
                        () => _decode_PerOctetComponentRate
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryService,
                _extension_additions_list_spec_for_DeliveryService,
                _root_component_type_list_2_spec_for_DeliveryService,
                undefined
            );
            return new DeliveryService /* SET_CONSTRUCTOR_CALL */(
                delivery_service_type,
                per_message_component_rate,
                per_octet_component_rate
            );
        };
    }
    return _cached_decoder_for_DeliveryService(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryService */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryService */
let _cached_encoder_for_DeliveryService: $.ASN1Encoder<DeliveryService> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryService */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryService */
/**
 * @summary Encodes a(n) DeliveryService into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryService, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryService(
    value: DeliveryService,
    elGetter: $.ASN1Encoder<DeliveryService>
) {
    if (!_cached_encoder_for_DeliveryService) {
        _cached_encoder_for_DeliveryService = function (
            value: DeliveryService,
            elGetter: $.ASN1Encoder<DeliveryService>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DeliveryServiceType(
                            value.delivery_service_type,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.per_message_component_rate ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_PerMessageComponentRate,
                                  $.BER
                              )(value.per_message_component_rate, $.BER),
                        /* IF_ABSENT  */ value.per_octet_component_rate ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PerOctetComponentRate,
                                  $.BER
                              )(value.per_octet_component_rate, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveryService(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryService */

/* eslint-enable */
