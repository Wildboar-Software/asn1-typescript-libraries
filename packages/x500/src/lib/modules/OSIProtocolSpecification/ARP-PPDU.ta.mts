/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Abort_reason,
    _decode_Abort_reason,
    _encode_Abort_reason,
} from "../OSIProtocolSpecification/Abort-reason.ta.mjs";
import {
    Event_identifier,
    _decode_Event_identifier,
    _encode_Event_identifier,
} from "../OSIProtocolSpecification/Event-identifier.ta.mjs";
/**
 * @summary ARP_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARP-PPDU ::= SEQUENCE {
 *   provider-reason   [0] IMPLICIT Abort-reason OPTIONAL,
 *   event-identifier  [1] IMPLICIT Event-identifier OPTIONAL }
 * ```
 *
 */
export class ARP_PPDU {
    constructor(
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Abort_reason>,
        /**
         * @summary `event_identifier`.
         * @public
         * @readonly
         */
        readonly event_identifier: OPTIONAL<Event_identifier>
    ) {}

    /**
     * @summary Restructures an object into a ARP_PPDU
     * @description
     *
     * This takes an `object` and converts it to a `ARP_PPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARP_PPDU`.
     * @returns {ARP_PPDU}
     */
    public static _from_object(
        _o: { [_K in keyof ARP_PPDU]: ARP_PPDU[_K] }
    ): ARP_PPDU {
        return new ARP_PPDU(_o.provider_reason, _o.event_identifier);
    }
}

/**
 * @summary The Leading Root Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARP_PPDU: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "provider-reason",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "event-identifier",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARP_PPDU: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARP_PPDU: $.ComponentSpec[] = [];

let _cached_decoder_for_ARP_PPDU: $.ASN1Decoder<ARP_PPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ARP_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARP_PPDU} The decoded data structure.
 */
export function _decode_ARP_PPDU(el: _Element): ARP_PPDU {
    if (!_cached_decoder_for_ARP_PPDU) {
        _cached_decoder_for_ARP_PPDU = function (el: _Element): ARP_PPDU {
            let provider_reason: OPTIONAL<Abort_reason>;
            let event_identifier: OPTIONAL<Event_identifier>;
            const callbacks: $.DecodingMap = {
                "provider-reason": (_el: _Element): void => {
                    provider_reason = $._decode_implicit<Abort_reason>(
                        () => _decode_Abort_reason
                    )(_el);
                },
                "event-identifier": (_el: _Element): void => {
                    event_identifier = $._decode_implicit<Event_identifier>(
                        () => _decode_Event_identifier
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ARP_PPDU,
                _extension_additions_list_spec_for_ARP_PPDU,
                _root_component_type_list_2_spec_for_ARP_PPDU,
                undefined
            );
            return new ARP_PPDU(
                provider_reason,
                event_identifier
            );
        };
    }
    return _cached_decoder_for_ARP_PPDU(el);
}

let _cached_encoder_for_ARP_PPDU: $.ASN1Encoder<ARP_PPDU> | null = null;

/**
 * @summary Encodes a(n) ARP_PPDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARP_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARP_PPDU(
    value: ARP_PPDU,
    elGetter: $.ASN1Encoder<ARP_PPDU>
): _Element {
    if (!_cached_encoder_for_ARP_PPDU) {
        _cached_encoder_for_ARP_PPDU = function (
            value: ARP_PPDU        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Abort_reason,
                                  $.DER
                              )(value.provider_reason, $.DER),
                        /* IF_ABSENT  */ value.event_identifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Event_identifier,
                                  $.DER
                              )(value.event_identifier, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ARP_PPDU(value, elGetter);
}


/* eslint-enable */
