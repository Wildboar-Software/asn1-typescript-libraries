/* eslint-disable */
import {
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
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import { RN, _decode_RN, _encode_RN } from '../IPMSInformationObjects/RN.ta.mjs';
/**
 * @summary originate_rn_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-rn-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class originate_rn_ArgumentType {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageSubmissionEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: RN
    ) {}

    /**
     * @summary Restructures an object into a originate_rn_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `originate_rn_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `originate_rn_ArgumentType`.
     * @returns {originate_rn_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof originate_rn_ArgumentType]: originate_rn_ArgumentType[_K];
        }
    ): originate_rn_ArgumentType {
        return new originate_rn_ArgumentType(_o.envelope, _o.content);
    }
}

/**
 * @summary The Leading Root Component Types of originate_rn_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_originate_rn_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of originate_rn_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_originate_rn_ArgumentType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of originate_rn_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_originate_rn_ArgumentType: $.ComponentSpec[] = [];

let _cached_decoder_for_originate_rn_ArgumentType: $.ASN1Decoder<originate_rn_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) originate_rn_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {originate_rn_ArgumentType} The decoded data structure.
 */
export function _decode_originate_rn_ArgumentType(el: _Element) {
    if (!_cached_decoder_for_originate_rn_ArgumentType) {
        _cached_decoder_for_originate_rn_ArgumentType = function (
            el: _Element
        ): originate_rn_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let envelope!: MessageSubmissionEnvelope;
            let content!: RN;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = $._decode_implicit<MessageSubmissionEnvelope>(
                        () => _decode_MessageSubmissionEnvelope
                    )(_el);
                },
                content: (_el: _Element): void => {
                    content = $._decode_implicit<RN>(() => _decode_RN)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_originate_rn_ArgumentType,
                _extension_additions_list_spec_for_originate_rn_ArgumentType,
                _root_component_type_list_2_spec_for_originate_rn_ArgumentType,
                undefined
            );
            return new originate_rn_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                envelope,
                content
            );
        };
    }
    return _cached_decoder_for_originate_rn_ArgumentType(el);
}

let _cached_encoder_for_originate_rn_ArgumentType: $.ASN1Encoder<originate_rn_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) originate_rn_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The originate_rn_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_originate_rn_ArgumentType(
    value: originate_rn_ArgumentType,
    elGetter: $.ASN1Encoder<originate_rn_ArgumentType>
) {
    if (!_cached_encoder_for_originate_rn_ArgumentType) {
        _cached_encoder_for_originate_rn_ArgumentType = function (
            value: originate_rn_ArgumentType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionEnvelope,
                            $.BER
                        )(value.envelope, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_RN,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_originate_rn_ArgumentType(value, elGetter);
}


/* eslint-enable */
