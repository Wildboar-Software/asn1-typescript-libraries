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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import {
    EDIN,
    _decode_EDIN,
    _encode_EDIN,
} from '../EDIMSInformationObjects/EDIN.ta.mjs';
/**
 * @summary originate_edin_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-edin-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class originate_edin_ArgumentType {
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
        readonly content: EDIN
    ) {}

    /**
     * @summary Restructures an object into a originate_edin_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `originate_edin_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `originate_edin_ArgumentType`.
     * @returns {originate_edin_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof originate_edin_ArgumentType]: originate_edin_ArgumentType[_K];
        }
    ): originate_edin_ArgumentType {
        return new originate_edin_ArgumentType(_o.envelope, _o.content);
    }
}

/**
 * @summary The Leading Root Component Types of originate_edin_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_originate_edin_ArgumentType: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of originate_edin_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_originate_edin_ArgumentType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of originate_edin_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_originate_edin_ArgumentType: $.ComponentSpec[] = [];

let _cached_decoder_for_originate_edin_ArgumentType: $.ASN1Decoder<originate_edin_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) originate_edin_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {originate_edin_ArgumentType} The decoded data structure.
 */
export function _decode_originate_edin_ArgumentType(el: _Element): originate_edin_ArgumentType {
    if (!_cached_decoder_for_originate_edin_ArgumentType) {
        _cached_decoder_for_originate_edin_ArgumentType = function (
            el: _Element
        ): originate_edin_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let envelope!: MessageSubmissionEnvelope;
            let content!: EDIN;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = $._decode_implicit<MessageSubmissionEnvelope>(
                        () => _decode_MessageSubmissionEnvelope
                    )(_el);
                },
                content: (_el: _Element): void => {
                    content = $._decode_explicit<EDIN>(() => _decode_EDIN)(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_originate_edin_ArgumentType,
                _extension_additions_list_spec_for_originate_edin_ArgumentType,
                _root_component_type_list_2_spec_for_originate_edin_ArgumentType,
                undefined
            );
            return new originate_edin_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                envelope,
                content
            );
        };
    }
    return _cached_decoder_for_originate_edin_ArgumentType(el);
}

let _cached_encoder_for_originate_edin_ArgumentType: $.ASN1Encoder<originate_edin_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) originate_edin_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The originate_edin_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_originate_edin_ArgumentType(
    value: originate_edin_ArgumentType,
    elGetter: $.ASN1Encoder<originate_edin_ArgumentType>
): _Element {
    if (!_cached_encoder_for_originate_edin_ArgumentType) {
        _cached_encoder_for_originate_edin_ArgumentType = function (
            value: originate_edin_ArgumentType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionEnvelope,
                            $.BER
                        )(value.envelope, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_EDIN,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_originate_edin_ArgumentType(value, elGetter);
}


/* eslint-enable */
