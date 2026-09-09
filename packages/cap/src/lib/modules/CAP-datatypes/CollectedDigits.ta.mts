import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorTreatment, _enum_for_ErrorTreatment, stdErrorAndInfo, _decode_ErrorTreatment, _encode_ErrorTreatment } from "./ErrorTreatment.ta.mjs";

/**
 * @summary CollectedDigits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CollectedDigits ::= SEQUENCE {
 minimumNbOfDigits			[0] INTEGER (1..30)	DEFAULT 1,
 maximumNbOfDigits			[1] INTEGER (1..30),
 endOfReplyDigit			[2] OCTET STRING (SIZE (1..2))		OPTIONAL,
 cancelDigit				[3] OCTET STRING (SIZE (1..2))		OPTIONAL,
 startDigit				[4] OCTET STRING (SIZE (1..2))		OPTIONAL,
 firstDigitTimeOut			[5] INTEGER (1..127)			OPTIONAL,
 interDigitTimeOut			[6] INTEGER (1..127)			OPTIONAL,
 errorTreatment			[7] ErrorTreatment DEFAULT stdErrorAndInfo,
 interruptableAnnInd			[8] BOOLEAN DEFAULT TRUE,
 voiceInformation			[9] BOOLEAN DEFAULT FALSE,
 voiceBack				[10] BOOLEAN DEFAULT FALSE
 }
 * ```
 *
 */
export class CollectedDigits {
    constructor (
        readonly minimumNbOfDigits: OPTIONAL<INTEGER>,
        readonly maximumNbOfDigits: INTEGER,
        readonly endOfReplyDigit: OPTIONAL<OCTET_STRING>,
        readonly cancelDigit: OPTIONAL<OCTET_STRING>,
        readonly startDigit: OPTIONAL<OCTET_STRING>,
        readonly firstDigitTimeOut: OPTIONAL<INTEGER>,
        readonly interDigitTimeOut: OPTIONAL<INTEGER>,
        readonly errorTreatment: OPTIONAL<ErrorTreatment>,
        readonly interruptableAnnInd: OPTIONAL<BOOLEAN>,
        readonly voiceInformation: OPTIONAL<BOOLEAN>,
        readonly voiceBack: OPTIONAL<BOOLEAN>,
    ) {}

    public static _from_object (_o: { [_K in keyof (CollectedDigits)]: (CollectedDigits)[_K] }): CollectedDigits {
        return new CollectedDigits(_o.minimumNbOfDigits, _o.maximumNbOfDigits, _o.endOfReplyDigit, _o.cancelDigit, _o.startDigit, _o.firstDigitTimeOut, _o.interDigitTimeOut, _o.errorTreatment, _o.interruptableAnnInd, _o.voiceInformation, _o.voiceBack);
    }

    public static get _default_value_for_minimumNbOfDigits () { return 1; }
    public static get _default_value_for_errorTreatment () { return stdErrorAndInfo; }
    public static get _default_value_for_interruptableAnnInd () { return true; }
    public static get _default_value_for_voiceInformation () { return false; }
    public static get _default_value_for_voiceBack () { return false; }

    public static _enum_for_errorTreatment = _enum_for_ErrorTreatment;
}

export const _root_component_type_list_1_spec_for_CollectedDigits: $.ComponentSpec[] = [
    new $.ComponentSpec("minimumNbOfDigits", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximumNbOfDigits", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endOfReplyDigit", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cancelDigit", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startDigit", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("firstDigitTimeOut", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("interDigitTimeOut", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("errorTreatment", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("interruptableAnnInd", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("voiceInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("voiceBack", true, $.hasTag(_TagClass.context, 10))
];

export const _root_component_type_list_2_spec_for_CollectedDigits: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CollectedDigits: $.ComponentSpec[] = [];

let _cached_decoder_for_CollectedDigits: $.ASN1Decoder<CollectedDigits> | null = null;
export function _decode_CollectedDigits (el: _Element): CollectedDigits {
    if (!_cached_decoder_for_CollectedDigits) {
        _cached_decoder_for_CollectedDigits = function (el: _Element): CollectedDigits {
    let minimumNbOfDigits: OPTIONAL<INTEGER> = CollectedDigits._default_value_for_minimumNbOfDigits;
    let maximumNbOfDigits!: INTEGER;
    let endOfReplyDigit: OPTIONAL<OCTET_STRING>;
    let cancelDigit: OPTIONAL<OCTET_STRING>;
    let startDigit: OPTIONAL<OCTET_STRING>;
    let firstDigitTimeOut: OPTIONAL<INTEGER>;
    let interDigitTimeOut: OPTIONAL<INTEGER>;
    let errorTreatment: OPTIONAL<ErrorTreatment> = CollectedDigits._default_value_for_errorTreatment;
    let interruptableAnnInd: OPTIONAL<BOOLEAN> = CollectedDigits._default_value_for_interruptableAnnInd;
    let voiceInformation: OPTIONAL<BOOLEAN> = CollectedDigits._default_value_for_voiceInformation;
    let voiceBack: OPTIONAL<BOOLEAN> = CollectedDigits._default_value_for_voiceBack;
    const callbacks: $.DecodingMap = {
        "minimumNbOfDigits": (_el: _Element): void => { minimumNbOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maximumNbOfDigits": (_el: _Element): void => { maximumNbOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "endOfReplyDigit": (_el: _Element): void => { endOfReplyDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cancelDigit": (_el: _Element): void => { cancelDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startDigit": (_el: _Element): void => { startDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "firstDigitTimeOut": (_el: _Element): void => { firstDigitTimeOut = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interDigitTimeOut": (_el: _Element): void => { interDigitTimeOut = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "errorTreatment": (_el: _Element): void => { errorTreatment = $._decode_implicit<ErrorTreatment>(() => _decode_ErrorTreatment)(_el); },
        "interruptableAnnInd": (_el: _Element): void => { interruptableAnnInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "voiceInformation": (_el: _Element): void => { voiceInformation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "voiceBack": (_el: _Element): void => { voiceBack = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectedDigits,
        _extension_additions_list_spec_for_CollectedDigits,
        _root_component_type_list_2_spec_for_CollectedDigits,
        undefined,
    );
    return new CollectedDigits(
        minimumNbOfDigits,
        maximumNbOfDigits,
        endOfReplyDigit,
        cancelDigit,
        startDigit,
        firstDigitTimeOut,
        interDigitTimeOut,
        errorTreatment,
        interruptableAnnInd,
        voiceInformation,
        voiceBack
    );
        };
    }
    return _cached_decoder_for_CollectedDigits(el);
}

let _cached_encoder_for_CollectedDigits: $.ASN1Encoder<CollectedDigits> | null = null;
export function _encode_CollectedDigits (value: CollectedDigits, elGetter: $.ASN1Encoder<CollectedDigits>): _Element {
    if (!_cached_encoder_for_CollectedDigits) {
        _cached_encoder_for_CollectedDigits = function (value: CollectedDigits): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.minimumNbOfDigits === undefined || $.deepEq(value.minimumNbOfDigits, CollectedDigits._default_value_for_minimumNbOfDigits) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.minimumNbOfDigits, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximumNbOfDigits, $.BER),
            /* IF_ABSENT  */ ((value.endOfReplyDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.endOfReplyDigit, $.BER)),
            /* IF_ABSENT  */ ((value.cancelDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cancelDigit, $.BER)),
            /* IF_ABSENT  */ ((value.startDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.startDigit, $.BER)),
            /* IF_ABSENT  */ ((value.firstDigitTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.firstDigitTimeOut, $.BER)),
            /* IF_ABSENT  */ ((value.interDigitTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.interDigitTimeOut, $.BER)),
            /* IF_DEFAULT */ (value.errorTreatment === undefined || $.deepEq(value.errorTreatment, CollectedDigits._default_value_for_errorTreatment) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ErrorTreatment, $.BER)(value.errorTreatment, $.BER)),
            /* IF_DEFAULT */ (value.interruptableAnnInd === undefined || $.deepEq(value.interruptableAnnInd, CollectedDigits._default_value_for_interruptableAnnInd) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.interruptableAnnInd, $.BER)),
            /* IF_DEFAULT */ (value.voiceInformation === undefined || $.deepEq(value.voiceInformation, CollectedDigits._default_value_for_voiceInformation) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.voiceInformation, $.BER)),
            /* IF_DEFAULT */ (value.voiceBack === undefined || $.deepEq(value.voiceBack, CollectedDigits._default_value_for_voiceBack) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.voiceBack, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CollectedDigits(value, elGetter);
}
