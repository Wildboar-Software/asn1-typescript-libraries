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
    ProofOfSubmission,
    _decode_ProofOfSubmission,
    _encode_ProofOfSubmission,
} from '../MTSAbstractService/ProofOfSubmission.ta.mjs';
import {
    OriginatingMTACertificate,
    _decode_OriginatingMTACertificate,
    _encode_OriginatingMTACertificate,
} from '../MTSAbstractService/OriginatingMTACertificate.ta.mjs';
import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
/**
 * @summary SubmissionProof
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionProof ::= SET {
 *   proof-of-submission          [0]  ProofOfSubmission,
 *   originating-MTA-certificate  [1]  OriginatingMTACertificate,
 *   message-submission-envelope  MessageSubmissionEnvelope
 * }
 * ```
 *
 * @class
 */
export class SubmissionProof {
    constructor(
        /**
         * @summary `proof_of_submission`.
         * @public
         * @readonly
         */
        readonly proof_of_submission: ProofOfSubmission,
        /**
         * @summary `originating_MTA_certificate`.
         * @public
         * @readonly
         */
        readonly originating_MTA_certificate: OriginatingMTACertificate,
        /**
         * @summary `message_submission_envelope`.
         * @public
         * @readonly
         */
        readonly message_submission_envelope: MessageSubmissionEnvelope
    ) {}

    /**
     * @summary Restructures an object into a SubmissionProof
     * @description
     *
     * This takes an `object` and converts it to a `SubmissionProof`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubmissionProof`.
     * @returns {SubmissionProof}
     */
    public static _from_object(
        _o: { [_K in keyof SubmissionProof]: SubmissionProof[_K] }
    ): SubmissionProof {
        return new SubmissionProof(
            _o.proof_of_submission,
            _o.originating_MTA_certificate,
            _o.message_submission_envelope
        );
    }
}

/**
 * @summary The Leading Root Component Types of SubmissionProof
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubmissionProof: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'proof-of-submission',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'originating-MTA-certificate',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'message-submission-envelope',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of SubmissionProof
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubmissionProof: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SubmissionProof
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubmissionProof: $.ComponentSpec[] = [];

let _cached_decoder_for_SubmissionProof: $.ASN1Decoder<SubmissionProof> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionProof
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionProof} The decoded data structure.
 */
export function _decode_SubmissionProof(el: _Element) {
    if (!_cached_decoder_for_SubmissionProof) {
        _cached_decoder_for_SubmissionProof = function (
            el: _Element
        ): SubmissionProof {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let proof_of_submission!: ProofOfSubmission;
            let originating_MTA_certificate!: OriginatingMTACertificate;
            let message_submission_envelope!: MessageSubmissionEnvelope;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'proof-of-submission': (_el: _Element): void => {
                    proof_of_submission = $._decode_implicit<ProofOfSubmission>(
                        () => _decode_ProofOfSubmission
                    )(_el);
                },
                'originating-MTA-certificate': (_el: _Element): void => {
                    originating_MTA_certificate = $._decode_implicit<OriginatingMTACertificate>(
                        () => _decode_OriginatingMTACertificate
                    )(_el);
                },
                'message-submission-envelope': (_el: _Element): void => {
                    message_submission_envelope = _decode_MessageSubmissionEnvelope(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubmissionProof,
                _extension_additions_list_spec_for_SubmissionProof,
                _root_component_type_list_2_spec_for_SubmissionProof,
                undefined
            );
            return new SubmissionProof /* SET_CONSTRUCTOR_CALL */(
                proof_of_submission,
                originating_MTA_certificate,
                message_submission_envelope
            );
        };
    }
    return _cached_decoder_for_SubmissionProof(el);
}

let _cached_encoder_for_SubmissionProof: $.ASN1Encoder<SubmissionProof> | null = null;

/**
 * @summary Encodes a(n) SubmissionProof into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionProof, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionProof(
    value: SubmissionProof,
    elGetter: $.ASN1Encoder<SubmissionProof>
) {
    if (!_cached_encoder_for_SubmissionProof) {
        _cached_encoder_for_SubmissionProof = function (
            value: SubmissionProof        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ProofOfSubmission,
                            $.BER
                        )(value.proof_of_submission, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_OriginatingMTACertificate,
                            $.BER
                        )(value.originating_MTA_certificate, $.BER),
                        /* REQUIRED   */ _encode_MessageSubmissionEnvelope(
                            value.message_submission_envelope,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubmissionProof(value, elGetter);
}


/* eslint-enable */
