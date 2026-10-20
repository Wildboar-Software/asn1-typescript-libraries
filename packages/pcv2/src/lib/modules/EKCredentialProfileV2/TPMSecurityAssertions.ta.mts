/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Version, _decode_Version, _encode_Version, v1 /* IMPORTED_SHORT_NAMED_INTEGER */ } from "../EKCredentialProfileV2/Version.ta.mjs";
// export { Version, Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Version, _encode_Version } from "../EKCredentialProfileV2/Version.ta.mjs";
import { EKGenerationType, _decode_EKGenerationType, _encode_EKGenerationType, _enum_for_EKGenerationType } from "../EKCredentialProfileV2/EKGenerationType.ta.mjs";
// export { EKGenerationType, _enum_for_EKGenerationType, EKGenerationType_internal /* IMPORTED_LONG_ENUMERATION_ITEM */, internal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EKGenerationType_injected /* IMPORTED_LONG_ENUMERATION_ITEM */, injected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EKGenerationType_internalRevocable /* IMPORTED_LONG_ENUMERATION_ITEM */, internalRevocable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EKGenerationType_injectedRevocable /* IMPORTED_LONG_ENUMERATION_ITEM */, injectedRevocable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EKGenerationType_firmwareLimited /* IMPORTED_LONG_ENUMERATION_ITEM */, firmwareLimited /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EKGenerationType, _encode_EKGenerationType } from "../EKCredentialProfileV2/EKGenerationType.ta.mjs";
import { EKGenerationLocation, _decode_EKGenerationLocation, _encode_EKGenerationLocation, _enum_for_EKGenerationLocation } from "../EKCredentialProfileV2/EKGenerationLocation.ta.mjs";
// export { EKGenerationLocation, _enum_for_EKGenerationLocation, EKGenerationLocation_tpmManufacturer /* IMPORTED_LONG_ENUMERATION_ITEM */, EKGenerationLocation_platformManufacturer /* IMPORTED_LONG_ENUMERATION_ITEM */, EKGenerationLocation_ekCertSigner /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_EKGenerationLocation, _encode_EKGenerationLocation } from "../EKCredentialProfileV2/EKGenerationLocation.ta.mjs";
import { EKCertificateGenerationLocation, _decode_EKCertificateGenerationLocation, _encode_EKCertificateGenerationLocation, _enum_for_EKCertificateGenerationLocation } from "../EKCredentialProfileV2/EKCertificateGenerationLocation.ta.mjs";
// export { EKCertificateGenerationLocation, _enum_for_EKCertificateGenerationLocation, EKCertificateGenerationLocation_tpmManufacturer /* IMPORTED_LONG_ENUMERATION_ITEM */, EKCertificateGenerationLocation_platformManufacturer /* IMPORTED_LONG_ENUMERATION_ITEM */, EKCertificateGenerationLocation_ekCertSigner /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_EKCertificateGenerationLocation, _encode_EKCertificateGenerationLocation } from "../EKCredentialProfileV2/EKCertificateGenerationLocation.ta.mjs";
import { CommonCriteriaMeasures, _decode_CommonCriteriaMeasures, _encode_CommonCriteriaMeasures } from "../EKCredentialProfileV2/CommonCriteriaMeasures.ta.mjs";
// export { CommonCriteriaMeasures, _decode_CommonCriteriaMeasures, _encode_CommonCriteriaMeasures } from "../EKCredentialProfileV2/CommonCriteriaMeasures.ta.mjs";
import { FIPSLevel, _decode_FIPSLevel, _encode_FIPSLevel } from "../EKCredentialProfileV2/FIPSLevel.ta.mjs";
// export { FIPSLevel, _decode_FIPSLevel, _encode_FIPSLevel } from "../EKCredentialProfileV2/FIPSLevel.ta.mjs";


/**
 * @summary TPMSecurityAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPMSecurityAssertions ::= SEQUENCE {
 *     version                         Version DEFAULT v1,
 *     fieldUpgradable                 BOOLEAN DEFAULT FALSE,
 *     ekGenerationType                [0] IMPLICIT EKGenerationType OPTIONAL,
 *     ekGenerationLocation            [1] IMPLICIT EKGenerationLocation OPTIONAL,
 *     ekCertificateGenerationLocation [2] IMPLICIT EKCertificateGenerationLocation OPTIONAL,
 *     ccInfo                          [3] IMPLICIT CommonCriteriaMeasures OPTIONAL,
 *     fipsLevel                       [4] IMPLICIT FIPSLevel OPTIONAL,
 *     iso9000Certified                [5] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     -- // FIXME: Wrong capitalization
 *     iso9000Uri                      IA5String (SIZE (1..urimax)) OPTIONAL -- // FIXME: Missing last paren
 * }
 * ```
 * 
 * @class
 */
export
class TPMSecurityAssertions {
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<Version>;
    /**
     * @summary `fieldUpgradable`.
     * @public
     * @readonly
     */
    readonly fieldUpgradable: OPTIONAL<BOOLEAN>;
    /**
     * @summary `ekGenerationType`.
     * @public
     * @readonly
     */
    readonly ekGenerationType: OPTIONAL<EKGenerationType>;
    /**
     * @summary `ekGenerationLocation`.
     * @public
     * @readonly
     */
    readonly ekGenerationLocation: OPTIONAL<EKGenerationLocation>;
    /**
     * @summary `ekCertificateGenerationLocation`.
     * @public
     * @readonly
     */
    readonly ekCertificateGenerationLocation: OPTIONAL<EKCertificateGenerationLocation>;
    /**
     * @summary `ccInfo`.
     * @public
     * @readonly
     */
    readonly ccInfo: OPTIONAL<CommonCriteriaMeasures>;
    /**
     * @summary `fipsLevel`.
     * @public
     * @readonly
     */
    readonly fipsLevel: OPTIONAL<FIPSLevel>;
    /**
     * @summary `iso9000Certified`.
     * @public
     * @readonly
     */
    readonly iso9000Certified: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iso9000Uri`.
     * @public
     * @readonly
     */
    readonly iso9000Uri: OPTIONAL<IA5String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: OPTIONAL<Version>,
        fieldUpgradable: OPTIONAL<BOOLEAN>,
        ekGenerationType: OPTIONAL<EKGenerationType>,
        ekGenerationLocation: OPTIONAL<EKGenerationLocation>,
        ekCertificateGenerationLocation: OPTIONAL<EKCertificateGenerationLocation>,
        ccInfo: OPTIONAL<CommonCriteriaMeasures>,
        fipsLevel: OPTIONAL<FIPSLevel>,
        iso9000Certified: OPTIONAL<BOOLEAN>,
        iso9000Uri: OPTIONAL<IA5String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        this.fieldUpgradable = fieldUpgradable;
        this.ekGenerationType = ekGenerationType;
        this.ekGenerationLocation = ekGenerationLocation;
        this.ekCertificateGenerationLocation = ekCertificateGenerationLocation;
        this.ccInfo = ccInfo;
        this.fipsLevel = fipsLevel;
        this.iso9000Certified = iso9000Certified;
        this.iso9000Uri = iso9000Uri;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TPMSecurityAssertions
     * @description
     * 
     * This takes an `object` and converts it to a `TPMSecurityAssertions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TPMSecurityAssertions`.
     * @returns {TPMSecurityAssertions}
     */
    public static _from_object (_o: { [_K in keyof (TPMSecurityAssertions)]: (TPMSecurityAssertions)[_K] }): TPMSecurityAssertions {
        return new TPMSecurityAssertions(_o.version, _o.fieldUpgradable, _o.ekGenerationType, _o.ekGenerationLocation, _o.ekCertificateGenerationLocation, _o.ccInfo, _o.fipsLevel, _o.iso9000Certified, _o.iso9000Uri, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return v1; }
    /**
     * @summary Getter that returns the default value for `fieldUpgradable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fieldUpgradable () { return false; }
    /**
     * @summary Getter that returns the default value for `iso9000Certified`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_iso9000Certified () { return false; }        /**
         * @summary The enum used as the type of the component `ekGenerationType`
         * @public
         * @static
         */

    public static _enum_for_ekGenerationType = _enum_for_EKGenerationType;        /**
         * @summary The enum used as the type of the component `ekGenerationLocation`
         * @public
         * @static
         */

    public static _enum_for_ekGenerationLocation = _enum_for_EKGenerationLocation;        /**
         * @summary The enum used as the type of the component `ekCertificateGenerationLocation`
         * @public
         * @static
         */

    public static _enum_for_ekCertificateGenerationLocation = _enum_for_EKCertificateGenerationLocation;
}

/**
 * @summary The Leading Root Component Types of TPMSecurityAssertions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TPMSecurityAssertions: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fieldUpgradable", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("ekGenerationType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ekGenerationLocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ekCertificateGenerationLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ccInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fipsLevel", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iso9000Certified", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iso9000Uri", true, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of TPMSecurityAssertions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TPMSecurityAssertions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TPMSecurityAssertions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TPMSecurityAssertions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TPMSecurityAssertions: $.ASN1Decoder<TPMSecurityAssertions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TPMSecurityAssertions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TPMSecurityAssertions (el: _Element): TPMSecurityAssertions {
    if (!_cached_decoder_for_TPMSecurityAssertions) { _cached_decoder_for_TPMSecurityAssertions = function (el: _Element): TPMSecurityAssertions {
    let version: OPTIONAL<Version> = TPMSecurityAssertions._default_value_for_version;
    let fieldUpgradable: OPTIONAL<BOOLEAN> = TPMSecurityAssertions._default_value_for_fieldUpgradable;
    let ekGenerationType: OPTIONAL<EKGenerationType>;
    let ekGenerationLocation: OPTIONAL<EKGenerationLocation>;
    let ekCertificateGenerationLocation: OPTIONAL<EKCertificateGenerationLocation>;
    let ccInfo: OPTIONAL<CommonCriteriaMeasures>;
    let fipsLevel: OPTIONAL<FIPSLevel>;
    let iso9000Certified: OPTIONAL<BOOLEAN> = TPMSecurityAssertions._default_value_for_iso9000Certified;
    let iso9000Uri: OPTIONAL<IA5String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_Version(_el); },
        "fieldUpgradable": (_el: _Element): void => { fieldUpgradable = $._decodeBoolean(_el); },
        "ekGenerationType": (_el: _Element): void => { ekGenerationType = $._decode_implicit<EKGenerationType>(() => _decode_EKGenerationType)(_el); },
        "ekGenerationLocation": (_el: _Element): void => { ekGenerationLocation = $._decode_implicit<EKGenerationLocation>(() => _decode_EKGenerationLocation)(_el); },
        "ekCertificateGenerationLocation": (_el: _Element): void => { ekCertificateGenerationLocation = $._decode_implicit<EKCertificateGenerationLocation>(() => _decode_EKCertificateGenerationLocation)(_el); },
        "ccInfo": (_el: _Element): void => { ccInfo = $._decode_implicit<CommonCriteriaMeasures>(() => _decode_CommonCriteriaMeasures)(_el); },
        "fipsLevel": (_el: _Element): void => { fipsLevel = $._decode_implicit<FIPSLevel>(() => _decode_FIPSLevel)(_el); },
        "iso9000Certified": (_el: _Element): void => { iso9000Certified = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iso9000Uri": (_el: _Element): void => { iso9000Uri = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TPMSecurityAssertions,
        _extension_additions_list_spec_for_TPMSecurityAssertions,
        _root_component_type_list_2_spec_for_TPMSecurityAssertions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TPMSecurityAssertions(
        version,
        fieldUpgradable,
        ekGenerationType,
        ekGenerationLocation,
        ekCertificateGenerationLocation,
        ccInfo,
        fipsLevel,
        iso9000Certified,
        iso9000Uri,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TPMSecurityAssertions(el);
}

let _cached_encoder_for_TPMSecurityAssertions: $.ASN1Encoder<TPMSecurityAssertions> | null = null;

/**
 * @summary Encodes a(n) TPMSecurityAssertions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TPMSecurityAssertions, encoded as an ASN.1 Element.
 */
export
function _encode_TPMSecurityAssertions (value: TPMSecurityAssertions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TPMSecurityAssertions) { _cached_encoder_for_TPMSecurityAssertions = function (value: TPMSecurityAssertions, elGetter: $.ASN1Encoder<TPMSecurityAssertions>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.version !== undefined && !$.deepEq(value.version, TPMSecurityAssertions._default_value_for_version)) {
        _components[_components_i++] = /* IF_DEFAULT */ _encode_Version(value.version, $.BER);
    }
    if (value.fieldUpgradable !== undefined && !$.deepEq(value.fieldUpgradable, TPMSecurityAssertions._default_value_for_fieldUpgradable)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.fieldUpgradable, $.BER);
    }
    if (value.ekGenerationType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_EKGenerationType, $.BER)(value.ekGenerationType, $.BER);
    }
    if (value.ekGenerationLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EKGenerationLocation, $.BER)(value.ekGenerationLocation, $.BER);
    }
    if (value.ekCertificateGenerationLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EKCertificateGenerationLocation, $.BER)(value.ekCertificateGenerationLocation, $.BER);
    }
    if (value.ccInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CommonCriteriaMeasures, $.BER)(value.ccInfo, $.BER);
    }
    if (value.fipsLevel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FIPSLevel, $.BER)(value.fipsLevel, $.BER);
    }
    if (value.iso9000Certified !== undefined && !$.deepEq(value.iso9000Certified, TPMSecurityAssertions._default_value_for_iso9000Certified)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.iso9000Certified, $.BER);
    }
    if (value.iso9000Uri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodeIA5String(value.iso9000Uri, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TPMSecurityAssertions(value, elGetter);
}


/* eslint-enable */
