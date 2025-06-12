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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DeliveryQueue,
    _decode_DeliveryQueue,
    _encode_DeliveryQueue,
} from '../MTSAbstractService/DeliveryQueue.ta.mjs';
export {
    DeliveryQueue,
    _decode_DeliveryQueue,
    _encode_DeliveryQueue,
} from '../MTSAbstractService/DeliveryQueue.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MessagesWaiting */
/**
 * @summary MessagesWaiting
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessagesWaiting ::= SET {
 *   urgent      [0]  DeliveryQueue,
 *   normal      [1]  DeliveryQueue,
 *   non-urgent  [2]  DeliveryQueue
 * }
 * ```
 *
 * @class
 */
export class MessagesWaiting {
    constructor(
        /**
         * @summary `urgent`.
         * @public
         * @readonly
         */
        readonly urgent: DeliveryQueue,
        /**
         * @summary `normal`.
         * @public
         * @readonly
         */
        readonly normal: DeliveryQueue,
        /**
         * @summary `non_urgent`.
         * @public
         * @readonly
         */
        readonly non_urgent: DeliveryQueue
    ) {}

    /**
     * @summary Restructures an object into a MessagesWaiting
     * @description
     *
     * This takes an `object` and converts it to a `MessagesWaiting`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessagesWaiting`.
     * @returns {MessagesWaiting}
     */
    public static _from_object(
        _o: { [_K in keyof MessagesWaiting]: MessagesWaiting[_K] }
    ): MessagesWaiting {
        return new MessagesWaiting(_o.urgent, _o.normal, _o.non_urgent);
    }
}
/* END_OF_SYMBOL_DEFINITION MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessagesWaiting */
/**
 * @summary The Leading Root Component Types of MessagesWaiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessagesWaiting: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'urgent',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'normal',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'non-urgent',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessagesWaiting */
/**
 * @summary The Trailing Root Component Types of MessagesWaiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessagesWaiting: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessagesWaiting */
/**
 * @summary The Extension Addition Component Types of MessagesWaiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessagesWaiting: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessagesWaiting */
let _cached_decoder_for_MessagesWaiting: $.ASN1Decoder<MessagesWaiting> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _decode_MessagesWaiting */
/**
 * @summary Decodes an ASN.1 element into a(n) MessagesWaiting
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessagesWaiting} The decoded data structure.
 */
export function _decode_MessagesWaiting(el: _Element) {
    if (!_cached_decoder_for_MessagesWaiting) {
        _cached_decoder_for_MessagesWaiting = function (
            el: _Element
        ): MessagesWaiting {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let urgent!: DeliveryQueue;
            let normal!: DeliveryQueue;
            let non_urgent!: DeliveryQueue;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                urgent: (_el: _Element): void => {
                    urgent = $._decode_implicit<DeliveryQueue>(
                        () => _decode_DeliveryQueue
                    )(_el);
                },
                normal: (_el: _Element): void => {
                    normal = $._decode_implicit<DeliveryQueue>(
                        () => _decode_DeliveryQueue
                    )(_el);
                },
                'non-urgent': (_el: _Element): void => {
                    non_urgent = $._decode_implicit<DeliveryQueue>(
                        () => _decode_DeliveryQueue
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessagesWaiting,
                _extension_additions_list_spec_for_MessagesWaiting,
                _root_component_type_list_2_spec_for_MessagesWaiting,
                undefined
            );
            return new MessagesWaiting /* SET_CONSTRUCTOR_CALL */(
                urgent,
                normal,
                non_urgent
            );
        };
    }
    return _cached_decoder_for_MessagesWaiting(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessagesWaiting */
let _cached_encoder_for_MessagesWaiting: $.ASN1Encoder<MessagesWaiting> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessagesWaiting */

/* START_OF_SYMBOL_DEFINITION _encode_MessagesWaiting */
/**
 * @summary Encodes a(n) MessagesWaiting into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessagesWaiting, encoded as an ASN.1 Element.
 */
export function _encode_MessagesWaiting(
    value: MessagesWaiting,
    elGetter: $.ASN1Encoder<MessagesWaiting>
) {
    if (!_cached_encoder_for_MessagesWaiting) {
        _cached_encoder_for_MessagesWaiting = function (
            value: MessagesWaiting,
            elGetter: $.ASN1Encoder<MessagesWaiting>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_DeliveryQueue,
                            $.BER
                        )(value.urgent, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_DeliveryQueue,
                            $.BER
                        )(value.normal, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_DeliveryQueue,
                            $.BER
                        )(value.non_urgent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessagesWaiting(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessagesWaiting */

/* eslint-enable */
