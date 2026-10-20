/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../AuthenticationFramework/Version.ta.mjs";
// export { Version, Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Version, _encode_Version } from "../AuthenticationFramework/Version.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../AuthenticationFramework/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../AuthenticationFramework/Time.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary CertificateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateList  ::= 
 *   SIGNED
 *     {SEQUENCE {version              Version OPTIONAL,
 *                --  if present, version must be v2
 *                signature            AlgorithmIdentifier,
 *                issuer               Name,
 *                thisUpdate           Time,
 *                nextUpdate           Time OPTIONAL,
 *                revokedCertificates
 *                  SEQUENCE OF
 *                    SEQUENCE {userCertificate     CertificateSerialNumber,
 *                              revocationDate      Time,
 *                              crlEntryExtensions  Extensions OPTIONAL} OPTIONAL,
 *                crlExtensions        [0]  Extensions OPTIONAL}}
 * ```
 */
export
type CertificateList = SIGNED<{ version: Version; signature: OPTIONAL<AlgorithmIdentifier>; issuer: OPTIONAL<Name>; thisUpdate: OPTIONAL<Time>; nextUpdate: Time; revokedCertificates: { userCertificate: OPTIONAL<CertificateSerialNumber>; revocationDate: OPTIONAL<Time>; crlEntryExtensions: Extensions }[]; crlExtensions: Extensions }>; // DefinedType

let _cached_decoder_for_CertificateList: $.ASN1Decoder<CertificateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateList (el: _Element): CertificateList {
    if (!_cached_decoder_for_CertificateList) { _cached_decoder_for_CertificateList = _get_decoder_for_SIGNED<{ version: Version; signature: OPTIONAL<AlgorithmIdentifier>; issuer: OPTIONAL<Name>; thisUpdate: OPTIONAL<Time>; nextUpdate: Time; revokedCertificates: { userCertificate: OPTIONAL<CertificateSerialNumber>; revocationDate: OPTIONAL<Time>; crlEntryExtensions: Extensions }[]; crlExtensions: Extensions }>(function (el: _Element): SIGNED {
    let version: OPTIONAL<Version>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let thisUpdate!: Time;
    let nextUpdate: OPTIONAL<Time>;
    let revokedCertificates: OPTIONAL<{ userCertificate: OPTIONAL<CertificateSerialNumber>; revocationDate: OPTIONAL<Time>; crlEntryExtensions: Extensions }[]>;
    let crlExtensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_Version(_el); },
        "signature": (_el: _Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_Name(_el); },
        "thisUpdate": (_el: _Element): void => { thisUpdate = _decode_Time(_el); },
        "nextUpdate": (_el: _Element): void => { nextUpdate = _decode_Time(_el); },
        "revokedCertificates": (_el: _Element): void => { revokedCertificates = $._decodeSequenceOf<{ userCertificate: OPTIONAL<CertificateSerialNumber>; revocationDate: OPTIONAL<Time>; crlEntryExtensions: Extensions }>(() => function (el: _Element): revokedCertificates {
    let userCertificate!: CertificateSerialNumber;
    let revocationDate!: Time;
    let crlEntryExtensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "userCertificate": (_el: _Element): void => { userCertificate = _decode_CertificateSerialNumber(_el); },
        "revocationDate": (_el: _Element): void => { revocationDate = _decode_Time(_el); },
        "crlEntryExtensions": (_el: _Element): void => { crlEntryExtensions = _decode_Extensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_revokedCertificates,
        _extension_additions_list_spec_for_revokedCertificates,
        _root_component_type_list_2_spec_for_revokedCertificates,
        undefined,
    );
    return new revokedCertificates(
        userCertificate,
        revocationDate,
        crlEntryExtensions
    );
})(_el); },
        "crlExtensions": (_el: _Element): void => { crlExtensions = $._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        version,
        signature,
        issuer,
        thisUpdate,
        nextUpdate,
        revokedCertificates,
        crlExtensions
    );
}); }
    return _cached_decoder_for_CertificateList(el);
}

let _cached_encoder_for_CertificateList: $.ASN1Encoder<CertificateList> | null = null;

/**
 * @summary Encodes a(n) CertificateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateList, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateList (value: CertificateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateList) { _cached_encoder_for_CertificateList = _get_encoder_for_SIGNED<{ version: Version; signature: OPTIONAL<AlgorithmIdentifier>; issuer: OPTIONAL<Name>; thisUpdate: OPTIONAL<Time>; nextUpdate: Time; revokedCertificates: { userCertificate: OPTIONAL<CertificateSerialNumber>; revocationDate: OPTIONAL<Time>; crlEntryExtensions: Extensions }[]; crlExtensions: Extensions }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    if (value.version !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Version(value.version, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, $.BER));
    _components.push(/* REQUIRED   */ _encode_Name(value.issuer, $.BER));
    _components.push(/* REQUIRED   */ _encode_Time(value.thisUpdate, $.BER));
    if (value.nextUpdate !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Time(value.nextUpdate, $.BER));
    }
    /* FIXME: revokedCertificates COULD_NOT_COMPILE_TYPE_ENCODER */
    if (value.crlExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Extensions, $.BER)(value.crlExtensions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_CertificateList(value, elGetter);
}


/* eslint-enable */
