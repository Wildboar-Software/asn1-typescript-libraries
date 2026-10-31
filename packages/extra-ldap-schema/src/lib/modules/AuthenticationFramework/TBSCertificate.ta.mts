/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Version, _decode_Version, _encode_Version, v1 /* IMPORTED_SHORT_NAMED_INTEGER */ } from "../AuthenticationFramework/Version.ta.mjs";
// export { Version, Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Version, _encode_Version } from "../AuthenticationFramework/Version.ta.mjs";
import { type CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { Validity, _decode_Validity, _encode_Validity } from "../AuthenticationFramework/Validity.ta.mjs";
// export { Validity, _decode_Validity, _encode_Validity } from "../AuthenticationFramework/Validity.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { type UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
// export { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary TBSCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBSCertificate ::= SEQUENCE {
 *   version                  [0]  Version DEFAULT v1,
 *   serialNumber                  CertificateSerialNumber,
 *   signature                     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   issuer                        Name,
 *   validity                      Validity,
 *   subject                       Name,
 *   subjectPublicKeyInfo          SubjectPublicKeyInfo,
 *   issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
 *   ...,
 *   [[2:  -- if present, version shall be v2 or v3
 *   subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],
 *   [[3:  -- if present, version shall be v2 or v3
 *   extensions               [3]  Extensions OPTIONAL ]]
 *   -- If present, version shall be v3]]
 *  } (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 * 
 * @class
 */
export
class TBSCertificate {
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<Version>;
    /**
     * @summary `serialNumber`.
     * @public
     * @readonly
     */
    readonly serialNumber: CertificateSerialNumber;
    /**
     * @summary `signature`.
     * @public
     * @readonly
     */
    readonly signature: AlgorithmIdentifier;
    /**
     * @summary `issuer`.
     * @public
     * @readonly
     */
    readonly issuer: Name;
    /**
     * @summary `validity`.
     * @public
     * @readonly
     */
    readonly validity: Validity;
    /**
     * @summary `subject`.
     * @public
     * @readonly
     */
    readonly subject: Name;
    /**
     * @summary `subjectPublicKeyInfo`.
     * @public
     * @readonly
     */
    readonly subjectPublicKeyInfo: SubjectPublicKeyInfo;
    /**
     * @summary `issuerUniqueIdentifier`.
     * @public
     * @readonly
     */
    readonly issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
    /**
     * @summary `subjectUniqueIdentifier`.
     * @public
     * @readonly
     */
    readonly subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: OPTIONAL<Version>,
        serialNumber: CertificateSerialNumber,
        signature: AlgorithmIdentifier,
        issuer: Name,
        validity: Validity,
        subject: Name,
        subjectPublicKeyInfo: SubjectPublicKeyInfo,
        issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        extensions: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        this.serialNumber = serialNumber;
        this.signature = signature;
        this.issuer = issuer;
        this.validity = validity;
        this.subject = subject;
        this.subjectPublicKeyInfo = subjectPublicKeyInfo;
        this.issuerUniqueIdentifier = issuerUniqueIdentifier;
        this.subjectUniqueIdentifier = subjectUniqueIdentifier;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TBSCertificate
     * @description
     * 
     * This takes an `object` and converts it to a `TBSCertificate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertificate`.
     * @returns {TBSCertificate}
     */
    public static _from_object (_o: { [_K in keyof (TBSCertificate)]: (TBSCertificate)[_K] }): TBSCertificate {
        return new TBSCertificate(_o.version, _o.serialNumber, _o.signature, _o.issuer, _o.validity, _o.subject, _o.subjectPublicKeyInfo, _o.issuerUniqueIdentifier, _o.subjectUniqueIdentifier, _o.extensions, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of TBSCertificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serialNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec("validity", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("subject", false, $.hasAnyTag),
    new $.ComponentSpec("subjectPublicKeyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("issuerUniqueIdentifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TBSCertificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSCertificate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TBSCertificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectUniqueIdentifier", true, $.hasTag(_TagClass.context, 2), 0, 2),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3), 1, 3)
];

let _cached_decoder_for_TBSCertificate: $.ASN1Decoder<TBSCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TBSCertificate (el: _Element): TBSCertificate {
    if (!_cached_decoder_for_TBSCertificate) { _cached_decoder_for_TBSCertificate = function (el: _Element): TBSCertificate {
    let version: OPTIONAL<Version> = TBSCertificate._default_value_for_version;
    let serialNumber!: CertificateSerialNumber;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let validity!: Validity;
    let subject!: Name;
    let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
    let issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
    let subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>; // Only present in version 2 and higher.
    let extensions: OPTIONAL<Extensions>; // Only present in version 3 and higher.
    const _unrecognizedExtensionsList: _Element[] = [];
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
        _root_component_type_list_1_spec_for_TBSCertificate,
        _extension_additions_list_spec_for_TBSCertificate,
        _root_component_type_list_2_spec_for_TBSCertificate,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertificate(
        version,
        serialNumber,
        signature,
        issuer,
        validity,
        subject,
        subjectPublicKeyInfo,
        issuerUniqueIdentifier,
        subjectUniqueIdentifier,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TBSCertificate(el);
}

let _cached_encoder_for_TBSCertificate: $.ASN1Encoder<TBSCertificate> | null = null;

/**
 * @summary Encodes a(n) TBSCertificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_TBSCertificate (value: TBSCertificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TBSCertificate) { _cached_encoder_for_TBSCertificate = function (value: TBSCertificate, elGetter: $.ASN1Encoder<TBSCertificate>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.version !== undefined && !$.deepEq(value.version, TBSCertificate._default_value_for_version)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_Version, $.BER)(value.version, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_Name(value.issuer, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_Validity(value.validity, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_Name(value.subject, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_SubjectPublicKeyInfo(value.subjectPublicKeyInfo, $.BER);
    if (value.issuerUniqueIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UniqueIdentifier, $.BER)(value.issuerUniqueIdentifier, $.BER);
    }
    if (value.subjectUniqueIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_UniqueIdentifier, $.BER)(value.subjectUniqueIdentifier, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TBSCertificate(value, elGetter);
}


/* eslint-enable */
