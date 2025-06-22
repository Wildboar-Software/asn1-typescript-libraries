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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MessageSubmissionArgument,
    _decode_MessageSubmissionArgument,
    _encode_MessageSubmissionArgument,
} from '../MTSAbstractService/MessageSubmissionArgument.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
import {
    _root_component_type_list_1_spec_for_MessageSubmissionArgument,
} from '../MTSAbstractService/MessageSubmissionArgument.ta.mjs';

/**
 * @summary MSMessageSubmissionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSMessageSubmissionArgument ::= SEQUENCE {
 *   COMPONENTS OF
 *     MessageSubmissionArgument -- This imported type has IMPLICIT tags --,
 *   -- 1994 extension
 *   submission-options  [4]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MSMessageSubmissionArgument implements MessageSubmissionArgument {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageSubmissionEnvelope /* REPLICATED_COMPONENT */,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: Content /* REPLICATED_COMPONENT */,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a MSMessageSubmissionArgument
     * @description
     *
     * This takes an `object` and converts it to a `MSMessageSubmissionArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSMessageSubmissionArgument`.
     * @returns {MSMessageSubmissionArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof MSMessageSubmissionArgument]: MSMessageSubmissionArgument[_K];
        }
    ): MSMessageSubmissionArgument {
        return new MSMessageSubmissionArgument(
            _o.envelope,
            _o.content,
            _o.submission_options
        );
    }
}

/**
 * @summary The Leading Root Component Types of MSMessageSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSMessageSubmissionArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_MessageSubmissionArgument,
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of MSMessageSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSMessageSubmissionArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MSMessageSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSMessageSubmissionArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_MSMessageSubmissionArgument: $.ASN1Decoder<MSMessageSubmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSMessageSubmissionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSMessageSubmissionArgument} The decoded data structure.
 */
export function _decode_MSMessageSubmissionArgument(el: _Element) {
    if (!_cached_decoder_for_MSMessageSubmissionArgument) {
        _cached_decoder_for_MSMessageSubmissionArgument = function (
            el: _Element
        ): MSMessageSubmissionArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let envelope!: MessageSubmissionEnvelope;
            let content!: Content;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = _decode_MessageSubmissionEnvelope(_el);
                },
                content: (_el: _Element): void => {
                    content = _decode_Content(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSMessageSubmissionArgument,
                _extension_additions_list_spec_for_MSMessageSubmissionArgument,
                _root_component_type_list_2_spec_for_MSMessageSubmissionArgument,
                undefined
            );
            return new MSMessageSubmissionArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                envelope,
                content,
                submission_options
            );
        };
    }
    return _cached_decoder_for_MSMessageSubmissionArgument(el);
}

let _cached_encoder_for_MSMessageSubmissionArgument: $.ASN1Encoder<MSMessageSubmissionArgument> | null = null;

/**
 * @summary Encodes a(n) MSMessageSubmissionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSMessageSubmissionArgument, encoded as an ASN.1 Element.
 */
export function _encode_MSMessageSubmissionArgument(
    value: MSMessageSubmissionArgument,
    elGetter: $.ASN1Encoder<MSMessageSubmissionArgument>
) {
    if (!_cached_encoder_for_MSMessageSubmissionArgument) {
        _cached_encoder_for_MSMessageSubmissionArgument = function (
            value: MSMessageSubmissionArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageSubmissionEnvelope(
                            value.envelope,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Content(value.content, $.BER),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSMessageSubmissionArgument(value, elGetter);
}


/* eslint-enable */
