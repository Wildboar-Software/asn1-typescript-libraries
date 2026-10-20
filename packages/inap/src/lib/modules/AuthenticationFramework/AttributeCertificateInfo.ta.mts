/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Version, _decode_Version, _encode_Version, v1 /* IMPORTED_SHORT_NAMED_INTEGER */ } from "../AuthenticationFramework/Version.ta.mjs";
// export { Version, Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Version, _encode_Version } from "../AuthenticationFramework/Version.ta.mjs";
import { AttributeCertificateInfo_subject, _decode_AttributeCertificateInfo_subject, _encode_AttributeCertificateInfo_subject } from "../AuthenticationFramework/AttributeCertificateInfo-subject.ta.mjs";
// export { AttributeCertificateInfo_subject, _decode_AttributeCertificateInfo_subject, _encode_AttributeCertificateInfo_subject } from "../AuthenticationFramework/AttributeCertificateInfo-subject.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { AttCertValidityPeriod, _decode_AttCertValidityPeriod, _encode_AttCertValidityPeriod } from "../AuthenticationFramework/AttCertValidityPeriod.ta.mjs";
// export { AttCertValidityPeriod, _decode_AttCertValidityPeriod, _encode_AttCertValidityPeriod } from "../AuthenticationFramework/AttCertValidityPeriod.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
// export { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary AttributeCertificateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificateInfo ::= SEQUENCE {
 *   version                Version DEFAULT v1,
 *   subject
 *     CHOICE {baseCertificateID  [0]  IssuerSerial, --  associated  with a Public Key Certificate--
 *             subjectName        [1]  GeneralNames}, --  associated  with a name
 *   issuer                 GeneralNames, --  CA issuing the attribute certificate
 *   signature              AlgorithmIdentifier,
 *   serialNumber           CertificateSerialNumber,
 *   attCertValidityPeriod  AttCertValidityPeriod,
 *   attributes             SEQUENCE OF Attribute,
 *   issuerUniqueID         UniqueIdentifier OPTIONAL,
 *   extensions             Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttributeCertificateInfo {
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<Version>;
    /**
     * @summary `subject`.
     * @public
     * @readonly
     */
    readonly subject: AttributeCertificateInfo_subject;
    /**
     * @summary `issuer`.
     * @public
     * @readonly
     */
    readonly issuer: GeneralNames;
    /**
     * @summary `signature`.
     * @public
     * @readonly
     */
    readonly signature: AlgorithmIdentifier;
    /**
     * @summary `serialNumber`.
     * @public
     * @readonly
     */
    readonly serialNumber: CertificateSerialNumber;
    /**
     * @summary `attCertValidityPeriod`.
     * @public
     * @readonly
     */
    readonly attCertValidityPeriod: AttCertValidityPeriod;
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: Attribute[];
    /**
     * @summary `issuerUniqueID`.
     * @public
     * @readonly
     */
    readonly issuerUniqueID: OPTIONAL<UniqueIdentifier>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        version: OPTIONAL<Version>,
        subject: AttributeCertificateInfo_subject,
        issuer: GeneralNames,
        signature: AlgorithmIdentifier,
        serialNumber: CertificateSerialNumber,
        attCertValidityPeriod: AttCertValidityPeriod,
        attributes: Attribute[],
        issuerUniqueID: OPTIONAL<UniqueIdentifier>,
        extensions: OPTIONAL<Extensions>
    ) {
        this.version = version;
        this.subject = subject;
        this.issuer = issuer;
        this.signature = signature;
        this.serialNumber = serialNumber;
        this.attCertValidityPeriod = attCertValidityPeriod;
        this.attributes = attributes;
        this.issuerUniqueID = issuerUniqueID;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a AttributeCertificateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeCertificateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateInfo`.
     * @returns {AttributeCertificateInfo}
     */
    public static _from_object (_o: { [_K in keyof (AttributeCertificateInfo)]: (AttributeCertificateInfo)[_K] }): AttributeCertificateInfo {
        return new AttributeCertificateInfo(_o.version, _o.subject, _o.issuer, _o.signature, _o.serialNumber, _o.attCertValidityPeriod, _o.attributes, _o.issuerUniqueID, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return v1; }
}

/**
 * @summary The Leading Root Component Types of AttributeCertificateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeCertificateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("subject", false, $.hasAnyTag),
    /* FIXME: issuer COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("serialNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("attCertValidityPeriod", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("issuerUniqueID", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AttributeCertificateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeCertificateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeCertificateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeCertificateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeCertificateInfo: $.ASN1Decoder<AttributeCertificateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificateInfo (el: _Element): AttributeCertificateInfo {
    if (!_cached_decoder_for_AttributeCertificateInfo) { _cached_decoder_for_AttributeCertificateInfo = function (el: _Element): AttributeCertificateInfo {
    let version: OPTIONAL<Version> = AttributeCertificateInfo._default_value_for_version;
    let subject!: AttributeCertificateInfo_subject;
    let issuer!: GeneralNames;
    let signature!: AlgorithmIdentifier;
    let serialNumber!: CertificateSerialNumber;
    let attCertValidityPeriod!: AttCertValidityPeriod;
    let attributes!: Attribute[];
    let issuerUniqueID: OPTIONAL<UniqueIdentifier>;
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_Version(_el); },
        "subject": (_el: _Element): void => { subject = _decode_AttributeCertificateInfo_subject(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_GeneralNames(_el); },
        "signature": (_el: _Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "serialNumber": (_el: _Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "attCertValidityPeriod": (_el: _Element): void => { attCertValidityPeriod = _decode_AttCertValidityPeriod(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decodeSequenceOf<Attribute>(() => _decode_Attribute)(_el); },
        "issuerUniqueID": (_el: _Element): void => { issuerUniqueID = _decode_UniqueIdentifier(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_Extensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificateInfo,
        _extension_additions_list_spec_for_AttributeCertificateInfo,
        _root_component_type_list_2_spec_for_AttributeCertificateInfo,
        undefined,
    );
    return new AttributeCertificateInfo(
        version,
        subject,
        issuer,
        signature,
        serialNumber,
        attCertValidityPeriod,
        attributes,
        issuerUniqueID,
        extensions
    );
}; }
    return _cached_decoder_for_AttributeCertificateInfo(el);
}

let _cached_encoder_for_AttributeCertificateInfo: $.ASN1Encoder<AttributeCertificateInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateInfo (value: AttributeCertificateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificateInfo) { _cached_encoder_for_AttributeCertificateInfo = function (value: AttributeCertificateInfo, elGetter: $.ASN1Encoder<AttributeCertificateInfo>): _Element {
    const _components: _Element[] = [];
    if (value.version !== undefined && !$.deepEq(value.version, AttributeCertificateInfo._default_value_for_version)) {
        _components.push(/* IF_DEFAULT */ _encode_Version(value.version, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_AttributeCertificateInfo_subject(value.subject, $.BER));
    _components.push(/* REQUIRED   */ _encode_GeneralNames(value.issuer, $.BER));
    _components.push(/* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, $.BER));
    _components.push(/* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_AttCertValidityPeriod(value.attCertValidityPeriod, $.BER));
    _components.push(/* REQUIRED   */ $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER)(value.attributes, $.BER));
    if (value.issuerUniqueID !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UniqueIdentifier(value.issuerUniqueID, $.BER));
    }
    if (value.extensions !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Extensions(value.extensions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeCertificateInfo(value, elGetter);
}


/* eslint-enable */
