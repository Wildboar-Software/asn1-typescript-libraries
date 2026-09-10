import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary BackwardServiceInteractionInd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackwardServiceInteractionInd ::= SEQUENCE {
 *  conferenceTreatmentIndicator	[1] OCTET STRING (SIZE(1))			OPTIONAL,
 *  
 *  
 *  
 *  
 *  callCompletionTreatmentIndicator	[2] OCTET STRING (SIZE(1))			OPTIONAL,
 *  
 *  
 *  
 *  
 *  ...
 *  }
 * ```
 *
 */
export class BackwardServiceInteractionInd {
    constructor (
        readonly conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        readonly callCompletionTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (BackwardServiceInteractionInd)]: (BackwardServiceInteractionInd)[_K] }): BackwardServiceInteractionInd {
        return new BackwardServiceInteractionInd(_o.conferenceTreatmentIndicator, _o.callCompletionTreatmentIndicator, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_BackwardServiceInteractionInd: $.ComponentSpec[] = [
    new $.ComponentSpec("conferenceTreatmentIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callCompletionTreatmentIndicator", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_BackwardServiceInteractionInd: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_BackwardServiceInteractionInd: $.ComponentSpec[] = [];

let _cached_decoder_for_BackwardServiceInteractionInd: $.ASN1Decoder<BackwardServiceInteractionInd> | null = null;
export function _decode_BackwardServiceInteractionInd (el: _Element): BackwardServiceInteractionInd {
    if (!_cached_decoder_for_BackwardServiceInteractionInd) {
        _cached_decoder_for_BackwardServiceInteractionInd = function (el: _Element): BackwardServiceInteractionInd {
    let conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let callCompletionTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "conferenceTreatmentIndicator": (_el: _Element): void => { conferenceTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callCompletionTreatmentIndicator": (_el: _Element): void => { callCompletionTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BackwardServiceInteractionInd,
        _extension_additions_list_spec_for_BackwardServiceInteractionInd,
        _root_component_type_list_2_spec_for_BackwardServiceInteractionInd,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BackwardServiceInteractionInd(
        conferenceTreatmentIndicator,
        callCompletionTreatmentIndicator,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_BackwardServiceInteractionInd(el);
}

let _cached_encoder_for_BackwardServiceInteractionInd: $.ASN1Encoder<BackwardServiceInteractionInd> | null = null;
export function _encode_BackwardServiceInteractionInd (value: BackwardServiceInteractionInd, elGetter: $.ASN1Encoder<BackwardServiceInteractionInd>): _Element {
    if (!_cached_encoder_for_BackwardServiceInteractionInd) {
        _cached_encoder_for_BackwardServiceInteractionInd = function (value: BackwardServiceInteractionInd): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.conferenceTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.conferenceTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.callCompletionTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.callCompletionTreatmentIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_BackwardServiceInteractionInd(value, elGetter);
}
