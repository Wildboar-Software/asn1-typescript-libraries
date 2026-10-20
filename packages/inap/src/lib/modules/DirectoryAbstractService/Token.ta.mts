/* eslint-disable */
import {
    BIT_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../DirectoryAbstractService/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../DirectoryAbstractService/Time.ta.mjs";
import { BindKeyInfo, _decode_BindKeyInfo, _encode_BindKeyInfo } from "../DirectoryAbstractService/BindKeyInfo.ta.mjs";
// export { BindKeyInfo, _decode_BindKeyInfo, _encode_BindKeyInfo } from "../DirectoryAbstractService/BindKeyInfo.ta.mjs";


/**
 * @summary Token
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Token  ::= 
 *   SIGNED
 *     {SEQUENCE {algorithm          [0]  AlgorithmIdentifier,
 *                name               [1]  DistinguishedName,
 *                time               [2]  Time,
 *                random             [3]  BIT STRING,
 *                response           [4]  BIT STRING OPTIONAL,
 *                bindIntAlgorithm
 *                  [5]  SEQUENCE SIZE (1..MAX) OF AlgorithmIdentifier OPTIONAL,
 *                bindIntKeyInfo     [6]  BindKeyInfo OPTIONAL,
 *                bindConfAlgorithm
 *                  [7]  SEQUENCE SIZE (1..MAX) OF AlgorithmIdentifier OPTIONAL,
 *                bindConfKeyInfo    [8]  BindKeyInfo OPTIONAL}}
 * ```
 */
export
type Token = SIGNED<{ algorithm: OPTIONAL<AlgorithmIdentifier>; name: OPTIONAL<DistinguishedName>; time: OPTIONAL<Time>; random: OPTIONAL<BIT_STRING>; response: BIT_STRING; bindIntAlgorithm: AlgorithmIdentifier[]; bindIntKeyInfo: BindKeyInfo; bindConfAlgorithm: AlgorithmIdentifier[]; bindConfKeyInfo: BindKeyInfo }>; // DefinedType

let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Token
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Token (el: _Element): Token {
    if (!_cached_decoder_for_Token) { _cached_decoder_for_Token = _get_decoder_for_SIGNED<{ algorithm: OPTIONAL<AlgorithmIdentifier>; name: OPTIONAL<DistinguishedName>; time: OPTIONAL<Time>; random: OPTIONAL<BIT_STRING>; response: BIT_STRING; bindIntAlgorithm: AlgorithmIdentifier[]; bindIntKeyInfo: BindKeyInfo; bindConfAlgorithm: AlgorithmIdentifier[]; bindConfKeyInfo: BindKeyInfo }>(function (el: _Element): SIGNED {
    let algorithm!: AlgorithmIdentifier;
    let name!: DistinguishedName;
    let time!: Time;
    let random!: BIT_STRING;
    let response: OPTIONAL<BIT_STRING>;
    let bindIntAlgorithm: OPTIONAL<AlgorithmIdentifier[]>;
    let bindIntKeyInfo: OPTIONAL<BindKeyInfo>;
    let bindConfAlgorithm: OPTIONAL<AlgorithmIdentifier[]>;
    let bindConfKeyInfo: OPTIONAL<BindKeyInfo>;
    const callbacks: $.DecodingMap = {
        "algorithm": (_el: _Element): void => { algorithm = $._decode_explicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "time": (_el: _Element): void => { time = $._decode_explicit<Time>(() => _decode_Time)(_el); },
        "random": (_el: _Element): void => { random = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "response": (_el: _Element): void => { response = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "bindIntAlgorithm": (_el: _Element): void => { bindIntAlgorithm = $._decode_explicit<AlgorithmIdentifier[]>(() => $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier))(_el); },
        "bindIntKeyInfo": (_el: _Element): void => { bindIntKeyInfo = $._decode_explicit<BindKeyInfo>(() => _decode_BindKeyInfo)(_el); },
        "bindConfAlgorithm": (_el: _Element): void => { bindConfAlgorithm = $._decode_explicit<AlgorithmIdentifier[]>(() => $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier))(_el); },
        "bindConfKeyInfo": (_el: _Element): void => { bindConfKeyInfo = $._decode_explicit<BindKeyInfo>(() => _decode_BindKeyInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        algorithm,
        name,
        time,
        random,
        response,
        bindIntAlgorithm,
        bindIntKeyInfo,
        bindConfAlgorithm,
        bindConfKeyInfo
    );
}); }
    return _cached_decoder_for_Token(el);
}

let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;

/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export
function _encode_Token (value: Token, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Token) { _cached_encoder_for_Token = _get_encoder_for_SIGNED<{ algorithm: OPTIONAL<AlgorithmIdentifier>; name: OPTIONAL<DistinguishedName>; time: OPTIONAL<Time>; random: OPTIONAL<BIT_STRING>; response: BIT_STRING; bindIntAlgorithm: AlgorithmIdentifier[]; bindIntKeyInfo: BindKeyInfo; bindConfAlgorithm: AlgorithmIdentifier[]; bindConfKeyInfo: BindKeyInfo }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_AlgorithmIdentifier, $.BER)(value.algorithm, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DistinguishedName, $.BER)(value.name, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Time, $.BER)(value.time, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBitString, $.BER)(value.random, $.BER));
    if (value.response !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.response, $.BER));
    }
    if (value.bindIntAlgorithm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.BER), $.BER)(value.bindIntAlgorithm, $.BER));
    }
    if (value.bindIntKeyInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_BindKeyInfo, $.BER)(value.bindIntKeyInfo, $.BER));
    }
    if (value.bindConfAlgorithm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.BER), $.BER)(value.bindConfAlgorithm, $.BER));
    }
    if (value.bindConfKeyInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_BindKeyInfo, $.BER)(value.bindConfKeyInfo, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_Token(value, elGetter);
}


/* eslint-enable */
