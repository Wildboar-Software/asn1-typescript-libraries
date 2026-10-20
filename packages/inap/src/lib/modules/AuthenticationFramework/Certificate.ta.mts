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
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { Validity, _decode_Validity, _encode_Validity } from "../AuthenticationFramework/Validity.ta.mjs";
// export { Validity, _decode_Validity, _encode_Validity } from "../AuthenticationFramework/Validity.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
// export { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary Certificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Certificate  ::= 
 *   SIGNED
 *     {SEQUENCE {version                  [0]  Version DEFAULT v1,
 *                serialNumber             CertificateSerialNumber,
 *                signature                AlgorithmIdentifier,
 *                issuer                   Name,
 *                validity                 Validity,
 *                subject                  Name,
 *                subjectPublicKeyInfo     SubjectPublicKeyInfo,
 *                issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
 *                --  if present, version must be v2 or v3
 *                subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL,
 *                --  if present, version must be v2 or v3
 *                extensions               [3]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type Certificate = SIGNED<{ version: Version; serialNumber: OPTIONAL<CertificateSerialNumber>; signature: OPTIONAL<AlgorithmIdentifier>; issuer: OPTIONAL<Name>; validity: OPTIONAL<Validity>; subject: OPTIONAL<Name>; subjectPublicKeyInfo: OPTIONAL<SubjectPublicKeyInfo>; issuerUniqueIdentifier: UniqueIdentifier; subjectUniqueIdentifier: UniqueIdentifier; extensions: Extensions }>; // DefinedType

let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Certificate (el: _Element): Certificate {
    if (!_cached_decoder_for_Certificate) { _cached_decoder_for_Certificate = _get_decoder_for_SIGNED<{ version: Version; serialNumber: OPTIONAL<CertificateSerialNumber>; signature: OPTIONAL<AlgorithmIdentifier>; issuer: OPTIONAL<Name>; validity: OPTIONAL<Validity>; subject: OPTIONAL<Name>; subjectPublicKeyInfo: OPTIONAL<SubjectPublicKeyInfo>; issuerUniqueIdentifier: UniqueIdentifier; subjectUniqueIdentifier: UniqueIdentifier; extensions: Extensions }>(function (el: _Element): SIGNED {
    let version: OPTIONAL<Version> = SIGNED._default_value_for_version;
    let serialNumber!: CertificateSerialNumber;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let validity!: Validity;
    let subject!: Name;
    let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
    let issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
    let subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_explicit<Version>(() => _decode_Version)(_el); },
        "serialNumber": (_el: _Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "signature": (_el: _Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_Name(_el); },
        "validity": (_el: _Element): void => { validity = _decode_Validity(_el); },
        "subject": (_el: _Element): void => { subject = _decode_Name(_el); },
        "subjectPublicKeyInfo": (_el: _Element): void => { subjectPublicKeyInfo = _decode_SubjectPublicKeyInfo(_el); },
        "issuerUniqueIdentifier": (_el: _Element): void => { issuerUniqueIdentifier = $._decode_implicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "subjectUniqueIdentifier": (_el: _Element): void => { subjectUniqueIdentifier = $._decode_implicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        version,
        serialNumber,
        signature,
        issuer,
        validity,
        subject,
        subjectPublicKeyInfo,
        issuerUniqueIdentifier,
        subjectUniqueIdentifier,
        extensions
    );
}); }
    return _cached_decoder_for_Certificate(el);
}

let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;

/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export
function _encode_Certificate (value: Certificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Certificate) { _cached_encoder_for_Certificate = _get_encoder_for_SIGNED<{ version: Version; serialNumber: OPTIONAL<CertificateSerialNumber>; signature: OPTIONAL<AlgorithmIdentifier>; issuer: OPTIONAL<Name>; validity: OPTIONAL<Validity>; subject: OPTIONAL<Name>; subjectPublicKeyInfo: OPTIONAL<SubjectPublicKeyInfo>; issuerUniqueIdentifier: UniqueIdentifier; subjectUniqueIdentifier: UniqueIdentifier; extensions: Extensions }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    if (value.version !== undefined && !$.deepEq(value.version, SIGNED._default_value_for_version)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_Version, $.BER)(value.version, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, $.BER));
    _components.push(/* REQUIRED   */ _encode_Name(value.issuer, $.BER));
    _components.push(/* REQUIRED   */ _encode_Validity(value.validity, $.BER));
    _components.push(/* REQUIRED   */ _encode_Name(value.subject, $.BER));
    _components.push(/* REQUIRED   */ _encode_SubjectPublicKeyInfo(value.subjectPublicKeyInfo, $.BER));
    if (value.issuerUniqueIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UniqueIdentifier, $.BER)(value.issuerUniqueIdentifier, $.BER));
    }
    if (value.subjectUniqueIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_UniqueIdentifier, $.BER)(value.subjectUniqueIdentifier, $.BER));
    }
    if (value.extensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_Certificate(value, elGetter);
}


/* eslint-enable */
