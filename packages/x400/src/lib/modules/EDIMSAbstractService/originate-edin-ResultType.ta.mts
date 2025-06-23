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
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta.mjs';
import {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta.mjs';
/**
 * @summary originate_edin_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-edin-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class originate_edin_ResultType {
    constructor(
        /**
         * @summary `submission_identifier`.
         * @public
         * @readonly
         */
        readonly submission_identifier: MessageSubmissionIdentifier,
        /**
         * @summary `submission_time`.
         * @public
         * @readonly
         */
        readonly submission_time: MessageSubmissionTime
    ) {}

    /**
     * @summary Restructures an object into a originate_edin_ResultType
     * @description
     *
     * This takes an `object` and converts it to a `originate_edin_ResultType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `originate_edin_ResultType`.
     * @returns {originate_edin_ResultType}
     */
    public static _from_object(
        _o: {
            [_K in keyof originate_edin_ResultType]: originate_edin_ResultType[_K];
        }
    ): originate_edin_ResultType {
        return new originate_edin_ResultType(
            _o.submission_identifier,
            _o.submission_time
        );
    }
}

/**
 * @summary The Leading Root Component Types of originate_edin_ResultType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_originate_edin_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'submission-identifier',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'submission-time',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of originate_edin_ResultType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_originate_edin_ResultType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of originate_edin_ResultType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_originate_edin_ResultType: $.ComponentSpec[] = [];

let _cached_decoder_for_originate_edin_ResultType: $.ASN1Decoder<originate_edin_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) originate_edin_ResultType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {originate_edin_ResultType} The decoded data structure.
 */
export function _decode_originate_edin_ResultType(el: _Element) {
    if (!_cached_decoder_for_originate_edin_ResultType) {
        _cached_decoder_for_originate_edin_ResultType = function (
            el: _Element
        ): originate_edin_ResultType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let submission_identifier!: MessageSubmissionIdentifier;
            let submission_time!: MessageSubmissionTime;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'submission-identifier': (_el: _Element): void => {
                    submission_identifier = $._decode_implicit<MessageSubmissionIdentifier>(
                        () => _decode_MessageSubmissionIdentifier
                    )(_el);
                },
                'submission-time': (_el: _Element): void => {
                    submission_time = $._decode_implicit<MessageSubmissionTime>(
                        () => _decode_MessageSubmissionTime
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_originate_edin_ResultType,
                _extension_additions_list_spec_for_originate_edin_ResultType,
                _root_component_type_list_2_spec_for_originate_edin_ResultType,
                undefined
            );
            return new originate_edin_ResultType /* SET_CONSTRUCTOR_CALL */(
                submission_identifier,
                submission_time
            );
        };
    }
    return _cached_decoder_for_originate_edin_ResultType(el);
}

let _cached_encoder_for_originate_edin_ResultType: $.ASN1Encoder<originate_edin_ResultType> | null = null;

/**
 * @summary Encodes a(n) originate_edin_ResultType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The originate_edin_ResultType, encoded as an ASN.1 Element.
 */
export function _encode_originate_edin_ResultType(
    value: originate_edin_ResultType,
    elGetter: $.ASN1Encoder<originate_edin_ResultType>
) {
    if (!_cached_encoder_for_originate_edin_ResultType) {
        _cached_encoder_for_originate_edin_ResultType = function (
            value: originate_edin_ResultType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionIdentifier,
                            $.BER
                        )(value.submission_identifier, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_MessageSubmissionTime,
                            $.BER
                        )(value.submission_time, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_originate_edin_ResultType(value, elGetter);
}


/* eslint-enable */
