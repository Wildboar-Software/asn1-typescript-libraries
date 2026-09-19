/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
// export { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
import { CatSupportedClasses, _decode_CatSupportedClasses, _encode_CatSupportedClasses } from "../RSPDefinitions/CatSupportedClasses.ta.mjs";
// export { CatSupportedClasses, _decode_CatSupportedClasses, _encode_CatSupportedClasses } from "../RSPDefinitions/CatSupportedClasses.ta.mjs";
import { EuiccFormFactorType, _decode_EuiccFormFactorType, _encode_EuiccFormFactorType } from "../RSPDefinitions/EuiccFormFactorType.ta.mjs";
// export { EuiccFormFactorType, _decode_EuiccFormFactorType, _encode_EuiccFormFactorType } from "../RSPDefinitions/EuiccFormFactorType.ta.mjs";
import { DeviceAdditionalFeatureSupport, _decode_DeviceAdditionalFeatureSupport, _encode_DeviceAdditionalFeatureSupport } from "../RSPDefinitions/DeviceAdditionalFeatureSupport.ta.mjs";
// export { DeviceAdditionalFeatureSupport, _decode_DeviceAdditionalFeatureSupport, _encode_DeviceAdditionalFeatureSupport } from "../RSPDefinitions/DeviceAdditionalFeatureSupport.ta.mjs";


/**
 * @summary DeviceCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceCapabilities ::= SEQUENCE { -- Highest fully supported release for each definition
 *     -- The device SHALL set all the capabilities it supports
 *     gsmSupportedRelease VersionType OPTIONAL,
 *     utranSupportedRelease VersionType OPTIONAL,
 *     cdma2000onexSupportedRelease VersionType OPTIONAL,
 *     cdma2000hrpdSupportedRelease VersionType OPTIONAL,
 *     cdma2000ehrpdSupportedRelease VersionType OPTIONAL,
 *     eutranEpcSupportedRelease VersionType OPTIONAL,
 *     contactlessSupportedRelease VersionType OPTIONAL,
 *     rspCrlSupportedVersion VersionType OPTIONAL,
 *     nrEpcSupportedRelease VersionType OPTIONAL,    
 *     nr5gcSupportedRelease VersionType OPTIONAL,
 *     eutran5gcSupportedRelease VersionType OPTIONAL,
 *     lpaSvn VersionType OPTIONAL, -- Not defined in this version of SGP.22
 *     catSupportedClasses CatSupportedClasses OPTIONAL, -- Not defined in this version of SGP.22
 *     euiccFormFactorType EuiccFormFactorType OPTIONAL, -- Not defined in this version of SGP.22
 *     deviceAdditionalFeatureSupport DeviceAdditionalFeatureSupport OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeviceCapabilities {
    constructor (
        /**
         * @summary `gsmSupportedRelease`.
         * @public
         * @readonly
         */
        readonly gsmSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `utranSupportedRelease`.
         * @public
         * @readonly
         */
        readonly utranSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `cdma2000onexSupportedRelease`.
         * @public
         * @readonly
         */
        readonly cdma2000onexSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `cdma2000hrpdSupportedRelease`.
         * @public
         * @readonly
         */
        readonly cdma2000hrpdSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `cdma2000ehrpdSupportedRelease`.
         * @public
         * @readonly
         */
        readonly cdma2000ehrpdSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `eutranEpcSupportedRelease`.
         * @public
         * @readonly
         */
        readonly eutranEpcSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `contactlessSupportedRelease`.
         * @public
         * @readonly
         */
        readonly contactlessSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `rspCrlSupportedVersion`.
         * @public
         * @readonly
         */
        readonly rspCrlSupportedVersion: OPTIONAL<VersionType>,
        /**
         * @summary `nrEpcSupportedRelease`.
         * @public
         * @readonly
         */
        readonly nrEpcSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `nr5gcSupportedRelease`.
         * @public
         * @readonly
         */
        readonly nr5gcSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `eutran5gcSupportedRelease`.
         * @public
         * @readonly
         */
        readonly eutran5gcSupportedRelease: OPTIONAL<VersionType>,
        /**
         * @summary `lpaSvn`.
         * @public
         * @readonly
         */
        readonly lpaSvn: OPTIONAL<VersionType>,
        /**
         * @summary `catSupportedClasses`.
         * @public
         * @readonly
         */
        readonly catSupportedClasses: OPTIONAL<CatSupportedClasses>,
        /**
         * @summary `euiccFormFactorType`.
         * @public
         * @readonly
         */
        readonly euiccFormFactorType: OPTIONAL<EuiccFormFactorType>,
        /**
         * @summary `deviceAdditionalFeatureSupport`.
         * @public
         * @readonly
         */
        readonly deviceAdditionalFeatureSupport: OPTIONAL<DeviceAdditionalFeatureSupport>
    ) {}

    /**
     * @summary Restructures an object into a DeviceCapabilities
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceCapabilities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceCapabilities`.
     * @returns {DeviceCapabilities}
     */
    public static _from_object (_o: { [_K in keyof (DeviceCapabilities)]: (DeviceCapabilities)[_K] }): DeviceCapabilities {
        return new DeviceCapabilities(_o.gsmSupportedRelease, _o.utranSupportedRelease, _o.cdma2000onexSupportedRelease, _o.cdma2000hrpdSupportedRelease, _o.cdma2000ehrpdSupportedRelease, _o.eutranEpcSupportedRelease, _o.contactlessSupportedRelease, _o.rspCrlSupportedVersion, _o.nrEpcSupportedRelease, _o.nr5gcSupportedRelease, _o.eutran5gcSupportedRelease, _o.lpaSvn, _o.catSupportedClasses, _o.euiccFormFactorType, _o.deviceAdditionalFeatureSupport);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceCapabilities: $.ComponentSpec[] = [
    new $.ComponentSpec("gsmSupportedRelease", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("utranSupportedRelease", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cdma2000onexSupportedRelease", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cdma2000hrpdSupportedRelease", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cdma2000ehrpdSupportedRelease", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eutranEpcSupportedRelease", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("contactlessSupportedRelease", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rspCrlSupportedVersion", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("nrEpcSupportedRelease", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("nr5gcSupportedRelease", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eutran5gcSupportedRelease", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("lpaSvn", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("catSupportedClasses", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("euiccFormFactorType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("deviceAdditionalFeatureSupport", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of DeviceCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceCapabilities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceCapabilities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceCapabilities: $.ASN1Decoder<DeviceCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceCapabilities (el: _Element): DeviceCapabilities {
    if (!_cached_decoder_for_DeviceCapabilities) { _cached_decoder_for_DeviceCapabilities = function (el: _Element): DeviceCapabilities {
    let gsmSupportedRelease: OPTIONAL<VersionType>;
    let utranSupportedRelease: OPTIONAL<VersionType>;
    let cdma2000onexSupportedRelease: OPTIONAL<VersionType>;
    let cdma2000hrpdSupportedRelease: OPTIONAL<VersionType>;
    let cdma2000ehrpdSupportedRelease: OPTIONAL<VersionType>;
    let eutranEpcSupportedRelease: OPTIONAL<VersionType>;
    let contactlessSupportedRelease: OPTIONAL<VersionType>;
    let rspCrlSupportedVersion: OPTIONAL<VersionType>;
    let nrEpcSupportedRelease: OPTIONAL<VersionType>;
    let nr5gcSupportedRelease: OPTIONAL<VersionType>;
    let eutran5gcSupportedRelease: OPTIONAL<VersionType>;
    let lpaSvn: OPTIONAL<VersionType>;
    let catSupportedClasses: OPTIONAL<CatSupportedClasses>;
    let euiccFormFactorType: OPTIONAL<EuiccFormFactorType>;
    let deviceAdditionalFeatureSupport: OPTIONAL<DeviceAdditionalFeatureSupport>;
    const callbacks: $.DecodingMap = {
        "gsmSupportedRelease": (_el: _Element): void => { gsmSupportedRelease = _decode_VersionType(_el); },
        "utranSupportedRelease": (_el: _Element): void => { utranSupportedRelease = _decode_VersionType(_el); },
        "cdma2000onexSupportedRelease": (_el: _Element): void => { cdma2000onexSupportedRelease = _decode_VersionType(_el); },
        "cdma2000hrpdSupportedRelease": (_el: _Element): void => { cdma2000hrpdSupportedRelease = _decode_VersionType(_el); },
        "cdma2000ehrpdSupportedRelease": (_el: _Element): void => { cdma2000ehrpdSupportedRelease = _decode_VersionType(_el); },
        "eutranEpcSupportedRelease": (_el: _Element): void => { eutranEpcSupportedRelease = _decode_VersionType(_el); },
        "contactlessSupportedRelease": (_el: _Element): void => { contactlessSupportedRelease = _decode_VersionType(_el); },
        "rspCrlSupportedVersion": (_el: _Element): void => { rspCrlSupportedVersion = _decode_VersionType(_el); },
        "nrEpcSupportedRelease": (_el: _Element): void => { nrEpcSupportedRelease = _decode_VersionType(_el); },
        "nr5gcSupportedRelease": (_el: _Element): void => { nr5gcSupportedRelease = _decode_VersionType(_el); },
        "eutran5gcSupportedRelease": (_el: _Element): void => { eutran5gcSupportedRelease = _decode_VersionType(_el); },
        "lpaSvn": (_el: _Element): void => { lpaSvn = _decode_VersionType(_el); },
        "catSupportedClasses": (_el: _Element): void => { catSupportedClasses = _decode_CatSupportedClasses(_el); },
        "euiccFormFactorType": (_el: _Element): void => { euiccFormFactorType = _decode_EuiccFormFactorType(_el); },
        "deviceAdditionalFeatureSupport": (_el: _Element): void => { deviceAdditionalFeatureSupport = _decode_DeviceAdditionalFeatureSupport(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceCapabilities,
        _extension_additions_list_spec_for_DeviceCapabilities,
        _root_component_type_list_2_spec_for_DeviceCapabilities,
        undefined,
    );
    return new DeviceCapabilities(
        gsmSupportedRelease,
        utranSupportedRelease,
        cdma2000onexSupportedRelease,
        cdma2000hrpdSupportedRelease,
        cdma2000ehrpdSupportedRelease,
        eutranEpcSupportedRelease,
        contactlessSupportedRelease,
        rspCrlSupportedVersion,
        nrEpcSupportedRelease,
        nr5gcSupportedRelease,
        eutran5gcSupportedRelease,
        lpaSvn,
        catSupportedClasses,
        euiccFormFactorType,
        deviceAdditionalFeatureSupport
    );
}; }
    return _cached_decoder_for_DeviceCapabilities(el);
}

let _cached_encoder_for_DeviceCapabilities: $.ASN1Encoder<DeviceCapabilities> | null = null;

/**
 * @summary Encodes a(n) DeviceCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceCapabilities (value: DeviceCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceCapabilities) { _cached_encoder_for_DeviceCapabilities = function (value: DeviceCapabilities, elGetter: $.ASN1Encoder<DeviceCapabilities>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gsmSupportedRelease === undefined) ? undefined : _encode_VersionType(value.gsmSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.utranSupportedRelease === undefined) ? undefined : _encode_VersionType(value.utranSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.cdma2000onexSupportedRelease === undefined) ? undefined : _encode_VersionType(value.cdma2000onexSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.cdma2000hrpdSupportedRelease === undefined) ? undefined : _encode_VersionType(value.cdma2000hrpdSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.cdma2000ehrpdSupportedRelease === undefined) ? undefined : _encode_VersionType(value.cdma2000ehrpdSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.eutranEpcSupportedRelease === undefined) ? undefined : _encode_VersionType(value.eutranEpcSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.contactlessSupportedRelease === undefined) ? undefined : _encode_VersionType(value.contactlessSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.rspCrlSupportedVersion === undefined) ? undefined : _encode_VersionType(value.rspCrlSupportedVersion, $.BER)),
            /* IF_ABSENT  */ ((value.nrEpcSupportedRelease === undefined) ? undefined : _encode_VersionType(value.nrEpcSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.nr5gcSupportedRelease === undefined) ? undefined : _encode_VersionType(value.nr5gcSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.eutran5gcSupportedRelease === undefined) ? undefined : _encode_VersionType(value.eutran5gcSupportedRelease, $.BER)),
            /* IF_ABSENT  */ ((value.lpaSvn === undefined) ? undefined : _encode_VersionType(value.lpaSvn, $.BER)),
            /* IF_ABSENT  */ ((value.catSupportedClasses === undefined) ? undefined : _encode_CatSupportedClasses(value.catSupportedClasses, $.BER)),
            /* IF_ABSENT  */ ((value.euiccFormFactorType === undefined) ? undefined : _encode_EuiccFormFactorType(value.euiccFormFactorType, $.BER)),
            /* IF_ABSENT  */ ((value.deviceAdditionalFeatureSupport === undefined) ? undefined : _encode_DeviceAdditionalFeatureSupport(value.deviceAdditionalFeatureSupport, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceCapabilities(value, elGetter);
}


/* eslint-enable */
