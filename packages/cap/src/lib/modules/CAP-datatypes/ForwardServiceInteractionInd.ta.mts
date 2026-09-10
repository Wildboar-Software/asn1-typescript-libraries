import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ForwardServiceInteractionInd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardServiceInteractionInd ::= SEQUENCE {
 *  conferenceTreatmentIndicator	[1] OCTET STRING (SIZE(1))			OPTIONAL,
 *  callDiversionTreatmentIndicator	[2] OCTET STRING (SIZE(1))			OPTIONAL,
 *  callingPartyRestrictionIndicator	[4] OCTET STRING (SIZE(1))			OPTIONAL,
 * ...
 *  }
 * ```
 *
 */
export class ForwardServiceInteractionInd {
    constructor (
        readonly conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        readonly callDiversionTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        readonly callingPartyRestrictionIndicator: OPTIONAL<OCTET_STRING>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (ForwardServiceInteractionInd)]: (ForwardServiceInteractionInd)[_K] }): ForwardServiceInteractionInd {
        return new ForwardServiceInteractionInd(_o.conferenceTreatmentIndicator, _o.callDiversionTreatmentIndicator, _o.callingPartyRestrictionIndicator, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_ForwardServiceInteractionInd: $.ComponentSpec[] = [
    new $.ComponentSpec("conferenceTreatmentIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callDiversionTreatmentIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyRestrictionIndicator", true, $.hasTag(_TagClass.context, 4))
];

export const _root_component_type_list_2_spec_for_ForwardServiceInteractionInd: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_ForwardServiceInteractionInd: $.ComponentSpec[] = [];

let _cached_decoder_for_ForwardServiceInteractionInd: $.ASN1Decoder<ForwardServiceInteractionInd> | null = null;
export function _decode_ForwardServiceInteractionInd (el: _Element): ForwardServiceInteractionInd {
    if (!_cached_decoder_for_ForwardServiceInteractionInd) {
        _cached_decoder_for_ForwardServiceInteractionInd = function (el: _Element): ForwardServiceInteractionInd {
    let conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let callDiversionTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let callingPartyRestrictionIndicator: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "conferenceTreatmentIndicator": (_el: _Element): void => { conferenceTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDiversionTreatmentIndicator": (_el: _Element): void => { callDiversionTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingPartyRestrictionIndicator": (_el: _Element): void => { callingPartyRestrictionIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardServiceInteractionInd,
        _extension_additions_list_spec_for_ForwardServiceInteractionInd,
        _root_component_type_list_2_spec_for_ForwardServiceInteractionInd,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ForwardServiceInteractionInd(
        conferenceTreatmentIndicator,
        callDiversionTreatmentIndicator,
        callingPartyRestrictionIndicator,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_ForwardServiceInteractionInd(el);
}

let _cached_encoder_for_ForwardServiceInteractionInd: $.ASN1Encoder<ForwardServiceInteractionInd> | null = null;
export function _encode_ForwardServiceInteractionInd (value: ForwardServiceInteractionInd, elGetter: $.ASN1Encoder<ForwardServiceInteractionInd>): _Element {
    if (!_cached_encoder_for_ForwardServiceInteractionInd) {
        _cached_encoder_for_ForwardServiceInteractionInd = function (value: ForwardServiceInteractionInd): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.conferenceTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.conferenceTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.callDiversionTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.callDiversionTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyRestrictionIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.callingPartyRestrictionIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_ForwardServiceInteractionInd(value, elGetter);
}
