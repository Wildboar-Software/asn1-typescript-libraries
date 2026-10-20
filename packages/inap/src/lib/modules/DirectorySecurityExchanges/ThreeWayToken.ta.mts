/* eslint-disable */
import {
    BIT_STRING,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    UTCTime,
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


/**
 * @summary ThreeWayToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeWayToken  ::= 
 *   SIGNED
 *     {SEQUENCE {algorithm  [0]  AlgorithmIdentifier,
 *                name       [1]  DistinguishedName,
 *                time       [2]  UTCTime OPTIONAL,
 *                random     [3]  BIT STRING,
 *                response   [4]  BIT STRING OPTIONAL,
 *                dirqop     [5]  OBJECT IDENTIFIER OPTIONAL}}
 * ```
 */
export
type ThreeWayToken = SIGNED<{ algorithm: OPTIONAL<AlgorithmIdentifier>; name: OPTIONAL<DistinguishedName>; time: UTCTime; random: OPTIONAL<BIT_STRING>; response: BIT_STRING; dirqop: OBJECT_IDENTIFIER }>; // DefinedType

let _cached_decoder_for_ThreeWayToken: $.ASN1Decoder<ThreeWayToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThreeWayToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ThreeWayToken (el: _Element): ThreeWayToken {
    if (!_cached_decoder_for_ThreeWayToken) { _cached_decoder_for_ThreeWayToken = _get_decoder_for_SIGNED<{ algorithm: OPTIONAL<AlgorithmIdentifier>; name: OPTIONAL<DistinguishedName>; time: UTCTime; random: OPTIONAL<BIT_STRING>; response: BIT_STRING; dirqop: OBJECT_IDENTIFIER }>(function (el: _Element): SIGNED {
    let algorithm!: AlgorithmIdentifier;
    let name!: DistinguishedName;
    let time: OPTIONAL<UTCTime>;
    let random!: BIT_STRING;
    let response: OPTIONAL<BIT_STRING>;
    let dirqop: OPTIONAL<OBJECT_IDENTIFIER>;
    const callbacks: $.DecodingMap = {
        "algorithm": (_el: _Element): void => { algorithm = $._decode_explicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "time": (_el: _Element): void => { time = $._decode_explicit<UTCTime>(() => $._decodeUTCTime)(_el); },
        "random": (_el: _Element): void => { random = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "response": (_el: _Element): void => { response = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "dirqop": (_el: _Element): void => { dirqop = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); }
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
        dirqop
    );
}); }
    return _cached_decoder_for_ThreeWayToken(el);
}

let _cached_encoder_for_ThreeWayToken: $.ASN1Encoder<ThreeWayToken> | null = null;

/**
 * @summary Encodes a(n) ThreeWayToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreeWayToken, encoded as an ASN.1 Element.
 */
export
function _encode_ThreeWayToken (value: ThreeWayToken, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ThreeWayToken) { _cached_encoder_for_ThreeWayToken = _get_encoder_for_SIGNED<{ algorithm: OPTIONAL<AlgorithmIdentifier>; name: OPTIONAL<DistinguishedName>; time: UTCTime; random: OPTIONAL<BIT_STRING>; response: BIT_STRING; dirqop: OBJECT_IDENTIFIER }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_AlgorithmIdentifier, $.BER)(value.algorithm, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DistinguishedName, $.BER)(value.name, $.BER));
    if (value.time !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeUTCTime, $.BER)(value.time, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBitString, $.BER)(value.random, $.BER));
    if (value.response !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.response, $.BER));
    }
    if (value.dirqop !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => $._encodeObjectIdentifier, $.BER)(value.dirqop, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ThreeWayToken(value, elGetter);
}


/* eslint-enable */
