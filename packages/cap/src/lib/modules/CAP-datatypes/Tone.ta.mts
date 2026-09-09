import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Tone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Tone ::= SEQUENCE {
 toneID				[0] Integer4,
 duration				[1] Integer4				OPTIONAL,
...
 }
 * ```
 *
 */
export class Tone {
    constructor (
        readonly toneID: INTEGER,
        readonly duration: OPTIONAL<INTEGER>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (Tone)]: (Tone)[_K] }): Tone {
        return new Tone(_o.toneID, _o.duration, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_Tone: $.ComponentSpec[] = [
    new $.ComponentSpec("toneID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_Tone: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_Tone: $.ComponentSpec[] = [];

let _cached_decoder_for_Tone: $.ASN1Decoder<Tone> | null = null;
export function _decode_Tone (el: _Element): Tone {
    if (!_cached_decoder_for_Tone) {
        _cached_decoder_for_Tone = function (el: _Element): Tone {
    let toneID!: INTEGER;
    let duration: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "toneID": (_el: _Element): void => { toneID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Tone,
        _extension_additions_list_spec_for_Tone,
        _root_component_type_list_2_spec_for_Tone,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Tone(
        toneID,
        duration,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_Tone(el);
}

let _cached_encoder_for_Tone: $.ASN1Encoder<Tone> | null = null;
export function _encode_Tone (value: Tone, elGetter: $.ASN1Encoder<Tone>): _Element {
    if (!_cached_encoder_for_Tone) {
        _cached_encoder_for_Tone = function (value: Tone, elGetter: $.ASN1Encoder<Tone>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.toneID, $.BER),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.duration, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_Tone(value, elGetter);
}
