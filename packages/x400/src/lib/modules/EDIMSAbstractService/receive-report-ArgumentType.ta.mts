/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ReportDeliveryEnvelope,
    _decode_ReportDeliveryEnvelope,
    _encode_ReportDeliveryEnvelope,
} from '../MTSAbstractService/ReportDeliveryEnvelope.ta.mjs';
import {
    InformationObject,
    _decode_InformationObject,
    _encode_InformationObject,
} from '../EDIMSInformationObjects/InformationObject.ta.mjs';
/* START_OF_SYMBOL_DEFINITION receive_report_ArgumentType */
/**
 * @summary receive_report_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * receive-report-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class receive_report_ArgumentType {
    constructor(
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
     * @summary Restructures an object into a receive_report_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `receive_report_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `receive_report_ArgumentType`.
     * @returns {receive_report_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof receive_report_ArgumentType]: receive_report_ArgumentType[_K];
        }
    ): receive_report_ArgumentType {
        return new receive_report_ArgumentType(
            _o.envelope,
            _o.undelivered_object
        );
    }
}
/* END_OF_SYMBOL_DEFINITION receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_receive_report_ArgumentType */
/**
 * @summary The Leading Root Component Types of receive_report_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_receive_report_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'undelivered-object',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_receive_report_ArgumentType */
/**
 * @summary The Trailing Root Component Types of receive_report_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_receive_report_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_receive_report_ArgumentType */
/**
 * @summary The Extension Addition Component Types of receive_report_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_receive_report_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_receive_report_ArgumentType */
let _cached_decoder_for_receive_report_ArgumentType: $.ASN1Decoder<receive_report_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _decode_receive_report_ArgumentType */
/**
 * @summary Decodes an ASN.1 element into a(n) receive_report_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {receive_report_ArgumentType} The decoded data structure.
 */
export function _decode_receive_report_ArgumentType(el: _Element) {
    if (!_cached_decoder_for_receive_report_ArgumentType) {
        _cached_decoder_for_receive_report_ArgumentType = function (
            el: _Element
        ): receive_report_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let envelope!: ReportDeliveryEnvelope;
            let undelivered_object: OPTIONAL<InformationObject>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = $._decode_implicit<ReportDeliveryEnvelope>(
                        () => _decode_ReportDeliveryEnvelope
                    )(_el);
                },
                'undelivered-object': (_el: _Element): void => {
                    undelivered_object = $._decode_explicit<InformationObject>(
                        () => _decode_InformationObject
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_receive_report_ArgumentType,
                _extension_additions_list_spec_for_receive_report_ArgumentType,
                _root_component_type_list_2_spec_for_receive_report_ArgumentType,
                undefined
            );
            return new receive_report_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                envelope,
                undelivered_object
            );
        };
    }
    return _cached_decoder_for_receive_report_ArgumentType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_receive_report_ArgumentType */
let _cached_encoder_for_receive_report_ArgumentType: $.ASN1Encoder<receive_report_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_receive_report_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _encode_receive_report_ArgumentType */
/**
 * @summary Encodes a(n) receive_report_ArgumentType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The receive_report_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_receive_report_ArgumentType(
    value: receive_report_ArgumentType,
    elGetter: $.ASN1Encoder<receive_report_ArgumentType>
) {
    if (!_cached_encoder_for_receive_report_ArgumentType) {
        _cached_encoder_for_receive_report_ArgumentType = function (
            value: receive_report_ArgumentType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ReportDeliveryEnvelope,
                            $.BER
                        )(value.envelope, $.BER),
                        /* IF_ABSENT  */ value.undelivered_object === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_InformationObject,
                                  $.BER
                              )(value.undelivered_object, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_receive_report_ArgumentType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_receive_report_ArgumentType */

/* eslint-enable */
