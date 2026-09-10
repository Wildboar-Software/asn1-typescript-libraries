import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MidCallControlInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MidCallControlInfo ::= SEQUENCE {
 *  minimumNumberOfDigits		[0]	INTEGER (1..30) DEFAULT 1,
 *  maximumNumberOfDigits		[1]	INTEGER (1..30) DEFAULT 30,
 *  endOfReplyDigit			[2]	OCTET STRING (SIZE (1..2))		OPTIONAL,
 *  cancelDigit				[3]	OCTET STRING (SIZE (1..2))		OPTIONAL,
 *  startDigit				[4]	OCTET STRING (SIZE (1..2))		OPTIONAL,
 *  interDigitTimeout			[6]	INTEGER (1..127) DEFAULT 10,
 *  ...
 *  }
 * ```
 *
 */
export class MidCallControlInfo {
    constructor (
        readonly minimumNumberOfDigits: OPTIONAL<INTEGER>,
        readonly maximumNumberOfDigits: OPTIONAL<INTEGER>,
        readonly endOfReplyDigit: OPTIONAL<OCTET_STRING>,
        readonly cancelDigit: OPTIONAL<OCTET_STRING>,
        readonly startDigit: OPTIONAL<OCTET_STRING>,
        readonly interDigitTimeout: OPTIONAL<INTEGER>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {
        if (endOfReplyDigit !== undefined && (endOfReplyDigit.length < 1 || endOfReplyDigit.length > 2)) {
            throw new ASN1SizeError("MidCallControlInfo.endOfReplyDigit violates SIZE constraint");
        }
        if (cancelDigit !== undefined && (cancelDigit.length < 1 || cancelDigit.length > 2)) {
            throw new ASN1SizeError("MidCallControlInfo.cancelDigit violates SIZE constraint");
        }
        if (startDigit !== undefined && (startDigit.length < 1 || startDigit.length > 2)) {
            throw new ASN1SizeError("MidCallControlInfo.startDigit violates SIZE constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (MidCallControlInfo)]: (MidCallControlInfo)[_K] }): MidCallControlInfo {
        return new MidCallControlInfo(_o.minimumNumberOfDigits, _o.maximumNumberOfDigits, _o.endOfReplyDigit, _o.cancelDigit, _o.startDigit, _o.interDigitTimeout, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_minimumNumberOfDigits () { return 1; }
    public static get _default_value_for_maximumNumberOfDigits () { return 30; }
    public static get _default_value_for_interDigitTimeout () { return 10; }
}

export const _root_component_type_list_1_spec_for_MidCallControlInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("minimumNumberOfDigits", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximumNumberOfDigits", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endOfReplyDigit", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cancelDigit", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startDigit", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("interDigitTimeout", true, $.hasTag(_TagClass.context, 6))
];

export const _root_component_type_list_2_spec_for_MidCallControlInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_MidCallControlInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_MidCallControlInfo: $.ASN1Decoder<MidCallControlInfo> | null = null;
export function _decode_MidCallControlInfo (el: _Element): MidCallControlInfo {
    if (!_cached_decoder_for_MidCallControlInfo) {
        _cached_decoder_for_MidCallControlInfo = function (el: _Element): MidCallControlInfo {
    let minimumNumberOfDigits: OPTIONAL<INTEGER> = MidCallControlInfo._default_value_for_minimumNumberOfDigits;
    let maximumNumberOfDigits: OPTIONAL<INTEGER> = MidCallControlInfo._default_value_for_maximumNumberOfDigits;
    let endOfReplyDigit: OPTIONAL<OCTET_STRING>;
    let cancelDigit: OPTIONAL<OCTET_STRING>;
    let startDigit: OPTIONAL<OCTET_STRING>;
    let interDigitTimeout: OPTIONAL<INTEGER> = MidCallControlInfo._default_value_for_interDigitTimeout;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "minimumNumberOfDigits": (_el: _Element): void => { minimumNumberOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maximumNumberOfDigits": (_el: _Element): void => { maximumNumberOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "endOfReplyDigit": (_el: _Element): void => { endOfReplyDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cancelDigit": (_el: _Element): void => { cancelDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startDigit": (_el: _Element): void => { startDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interDigitTimeout": (_el: _Element): void => { interDigitTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MidCallControlInfo,
        _extension_additions_list_spec_for_MidCallControlInfo,
        _root_component_type_list_2_spec_for_MidCallControlInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MidCallControlInfo(
        minimumNumberOfDigits,
        maximumNumberOfDigits,
        endOfReplyDigit,
        cancelDigit,
        startDigit,
        interDigitTimeout,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_MidCallControlInfo(el);
}

let _cached_encoder_for_MidCallControlInfo: $.ASN1Encoder<MidCallControlInfo> | null = null;
export function _encode_MidCallControlInfo (value: MidCallControlInfo, elGetter: $.ASN1Encoder<MidCallControlInfo>): _Element {
    if (!_cached_encoder_for_MidCallControlInfo) {
        _cached_encoder_for_MidCallControlInfo = function (value: MidCallControlInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.minimumNumberOfDigits === undefined || $.deepEq(value.minimumNumberOfDigits, MidCallControlInfo._default_value_for_minimumNumberOfDigits) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.minimumNumberOfDigits, $.BER)),
            /* IF_DEFAULT */ (value.maximumNumberOfDigits === undefined || $.deepEq(value.maximumNumberOfDigits, MidCallControlInfo._default_value_for_maximumNumberOfDigits) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximumNumberOfDigits, $.BER)),
            /* IF_ABSENT  */ ((value.endOfReplyDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.endOfReplyDigit, $.BER)),
            /* IF_ABSENT  */ ((value.cancelDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cancelDigit, $.BER)),
            /* IF_ABSENT  */ ((value.startDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.startDigit, $.BER)),
            /* IF_DEFAULT */ (value.interDigitTimeout === undefined || $.deepEq(value.interDigitTimeout, MidCallControlInfo._default_value_for_interDigitTimeout) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.interDigitTimeout, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_MidCallControlInfo(value, elGetter);
}
