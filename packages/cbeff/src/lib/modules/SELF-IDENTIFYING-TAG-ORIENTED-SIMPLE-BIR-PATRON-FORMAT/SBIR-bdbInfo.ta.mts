/* eslint-disable */
import {
    type DATE_TIME,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BDBFormat, _decode_BDBFormat, _encode_BDBFormat } from "../CBEFF-DATA-ELEMENTS/BDBFormat.ta.mjs";
import { type BDBIndex, _decode_BDBIndex, _encode_BDBIndex } from "../CBEFF-DATA-ELEMENTS/BDBIndex.ta.mjs";
import { type ChallengeResponse, _decode_ChallengeResponse, _encode_ChallengeResponse } from "../CBEFF-DATA-ELEMENTS/ChallengeResponse.ta.mjs";
import { ConstructedQuality, _decode_ConstructedQuality, _encode_ConstructedQuality } from "../CBEFF-DATA-ELEMENTS/ConstructedQuality.ta.mjs";
import { type EncryptionOptions, _decode_EncryptionOptions, _encode_EncryptionOptions } from "../CBEFF-DATA-ELEMENTS/EncryptionOptions.ta.mjs";
import { ProcessedLevel, _decode_ProcessedLevel, _encode_ProcessedLevel, _enum_for_ProcessedLevel } from "../CBEFF-DATA-ELEMENTS/ProcessedLevel.ta.mjs";
import { type Product, _decode_Product, _encode_Product } from "../CBEFF-DATA-ELEMENTS/Product.ta.mjs";
import { Purpose, _decode_Purpose, _encode_Purpose, _enum_for_Purpose } from "../CBEFF-DATA-ELEMENTS/Purpose.ta.mjs";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";
import { ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../CBEFF-DATA-ELEMENTS/ValidityPeriod.ta.mjs";
import { SBIR_bdbInfo_bdbBiometric, _decode_SBIR_bdbInfo_bdbBiometric, _encode_SBIR_bdbInfo_bdbBiometric } from "../SELF-IDENTIFYING-TAG-ORIENTED-SIMPLE-BIR-PATRON-FORMAT/SBIR-bdbInfo-bdbBiometric.ta.mjs";

/**
 * @summary SBIR_bdbInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIR-bdbInfo ::= SET {
 *     bdbFormat               [7]   BDBFormat,
 *     bdbEncryption           [0]   EncryptionOptions,
 *     bdbBiometric            [1]   SEQUENCE {
 *         bdbBiometricType          [1] BiometricType,
 *         bdbBiometricSubtype       [2] BiometricSubtype OPTIONAL
 *     } OPTIONAL,
 *     bdbProcessedLevel       [21]  ProcessedLevel OPTIONAL,
 *     bdbPurpose              [22]  Purpose OPTIONAL,
 *     bdbCreationDate         [3]   DATE-TIME OPTIONAL,
 *     bdbValidityPeriod       [5]   ValidityPeriod OPTIONAL,
 *     bdbChallengeResponse    [19]  ChallengeResponse OPTIONAL,
 *     bdbIndex                [20]  BDBIndex OPTIONAL,
 *     bdbProduct              [6]   Product OPTIONAL,
 *     bdbCaptureDevice        [2]   RegistryID OPTIONAL,
 *     bdbFeatureExtractionAlg [4]   RegistryID OPTIONAL,
 *     bdbComparisonAlg        [9]   RegistryID OPTIONAL,
 *     bdbCompressionAlg       [10]  RegistryID OPTIONAL,
 *     bdbQuality              [23]  ConstructedQuality OPTIONAL,
 *     bdbPADMechanism         [29]  RegistryID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SBIR_bdbInfo {
    /**
     * @summary `bdbFormat`.
     * @public
     * @readonly
     */
    readonly bdbFormat: BDBFormat;
    /**
     * @summary `bdbEncryption`.
     * @public
     * @readonly
     */
    readonly bdbEncryption: EncryptionOptions;
    /**
     * @summary `bdbBiometric`.
     * @public
     * @readonly
     */
    readonly bdbBiometric: OPTIONAL<SBIR_bdbInfo_bdbBiometric>;
    /**
     * @summary `bdbProcessedLevel`.
     * @public
     * @readonly
     */
    readonly bdbProcessedLevel: OPTIONAL<ProcessedLevel>;
    /**
     * @summary `bdbPurpose`.
     * @public
     * @readonly
     */
    readonly bdbPurpose: OPTIONAL<Purpose>;
    /**
     * @summary `bdbCreationDate`.
     * @public
     * @readonly
     */
    readonly bdbCreationDate: OPTIONAL<DATE_TIME>;
    /**
     * @summary `bdbValidityPeriod`.
     * @public
     * @readonly
     */
    readonly bdbValidityPeriod: OPTIONAL<ValidityPeriod>;
    /**
     * @summary `bdbChallengeResponse`.
     * @public
     * @readonly
     */
    readonly bdbChallengeResponse: OPTIONAL<ChallengeResponse>;
    /**
     * @summary `bdbIndex`.
     * @public
     * @readonly
     */
    readonly bdbIndex: OPTIONAL<BDBIndex>;
    /**
     * @summary `bdbProduct`.
     * @public
     * @readonly
     */
    readonly bdbProduct: OPTIONAL<Product>;
    /**
     * @summary `bdbCaptureDevice`.
     * @public
     * @readonly
     */
    readonly bdbCaptureDevice: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbFeatureExtractionAlg`.
     * @public
     * @readonly
     */
    readonly bdbFeatureExtractionAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbComparisonAlg`.
     * @public
     * @readonly
     */
    readonly bdbComparisonAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbCompressionAlg`.
     * @public
     * @readonly
     */
    readonly bdbCompressionAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbQuality`.
     * @public
     * @readonly
     */
    readonly bdbQuality: OPTIONAL<ConstructedQuality>;
    /**
     * @summary `bdbPADMechanism`.
     * @public
     * @readonly
     */
    readonly bdbPADMechanism: OPTIONAL<RegistryID>;

    constructor (
        bdbFormat: BDBFormat,
        bdbEncryption: EncryptionOptions,
        bdbBiometric?: OPTIONAL<SBIR_bdbInfo_bdbBiometric>,
        bdbProcessedLevel?: OPTIONAL<ProcessedLevel>,
        bdbPurpose?: OPTIONAL<Purpose>,
        bdbCreationDate?: OPTIONAL<DATE_TIME>,
        bdbValidityPeriod?: OPTIONAL<ValidityPeriod>,
        bdbChallengeResponse?: OPTIONAL<ChallengeResponse>,
        bdbIndex?: OPTIONAL<BDBIndex>,
        bdbProduct?: OPTIONAL<Product>,
        bdbCaptureDevice?: OPTIONAL<RegistryID>,
        bdbFeatureExtractionAlg?: OPTIONAL<RegistryID>,
        bdbComparisonAlg?: OPTIONAL<RegistryID>,
        bdbCompressionAlg?: OPTIONAL<RegistryID>,
        bdbQuality?: OPTIONAL<ConstructedQuality>,
        bdbPADMechanism?: OPTIONAL<RegistryID>
    ) {
        this.bdbFormat = bdbFormat;
        this.bdbEncryption = bdbEncryption;
        this.bdbBiometric = bdbBiometric;
        this.bdbProcessedLevel = bdbProcessedLevel;
        this.bdbPurpose = bdbPurpose;
        this.bdbCreationDate = bdbCreationDate;
        this.bdbValidityPeriod = bdbValidityPeriod;
        this.bdbChallengeResponse = bdbChallengeResponse;
        this.bdbIndex = bdbIndex;
        this.bdbProduct = bdbProduct;
        this.bdbCaptureDevice = bdbCaptureDevice;
        this.bdbFeatureExtractionAlg = bdbFeatureExtractionAlg;
        this.bdbComparisonAlg = bdbComparisonAlg;
        this.bdbCompressionAlg = bdbCompressionAlg;
        this.bdbQuality = bdbQuality;
        this.bdbPADMechanism = bdbPADMechanism;
    }

    /**
     * @summary Restructures an object into a SBIR_bdbInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SBIR_bdbInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBIR_bdbInfo`.
     * @returns {SBIR_bdbInfo}
     */
    public static _from_object (_o: { [_K in keyof (SBIR_bdbInfo)]: (SBIR_bdbInfo)[_K] }): SBIR_bdbInfo {
        return new SBIR_bdbInfo(_o.bdbFormat, _o.bdbEncryption, _o.bdbBiometric, _o.bdbProcessedLevel, _o.bdbPurpose, _o.bdbCreationDate, _o.bdbValidityPeriod, _o.bdbChallengeResponse, _o.bdbIndex, _o.bdbProduct, _o.bdbCaptureDevice, _o.bdbFeatureExtractionAlg, _o.bdbComparisonAlg, _o.bdbCompressionAlg, _o.bdbQuality, _o.bdbPADMechanism);
    }

        /**
         * @summary The enum used as the type of the component `bdbProcessedLevel`
         * @public
         * @static
         */

    public static _enum_for_bdbProcessedLevel: typeof _enum_for_ProcessedLevel = _enum_for_ProcessedLevel;
    /**
         * @summary The enum used as the type of the component `bdbPurpose`
         * @public
         * @static
         */

    public static _enum_for_bdbPurpose: typeof _enum_for_Purpose = _enum_for_Purpose;
}

/**
 * @summary The Leading Root Component Types of SBIR_bdbInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SBIR_bdbInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("bdbFormat", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbEncryption", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdbBiometric", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbProcessedLevel", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("bdbPurpose", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("bdbCreationDate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bdbValidityPeriod", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bdbChallengeResponse", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("bdbIndex", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("bdbProduct", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbCaptureDevice", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbFeatureExtractionAlg", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbComparisonAlg", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bdbCompressionAlg", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("bdbQuality", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("bdbPADMechanism", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of SBIR_bdbInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SBIR_bdbInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SBIR_bdbInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SBIR_bdbInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SBIR_bdbInfo: $.ASN1Decoder<SBIR_bdbInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIR_bdbInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIR_bdbInfo (el: _Element): SBIR_bdbInfo {
    if (!_cached_decoder_for_SBIR_bdbInfo) { _cached_decoder_for_SBIR_bdbInfo = function (el: _Element): SBIR_bdbInfo {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let bdbFormat!: BDBFormat;
    let bdbEncryption!: EncryptionOptions;
    let bdbBiometric: OPTIONAL<SBIR_bdbInfo_bdbBiometric>;
    let bdbProcessedLevel: OPTIONAL<ProcessedLevel>;
    let bdbPurpose: OPTIONAL<Purpose>;
    let bdbCreationDate: OPTIONAL<DATE_TIME>;
    let bdbValidityPeriod: OPTIONAL<ValidityPeriod>;
    let bdbChallengeResponse: OPTIONAL<ChallengeResponse>;
    let bdbIndex: OPTIONAL<BDBIndex>;
    let bdbProduct: OPTIONAL<Product>;
    let bdbCaptureDevice: OPTIONAL<RegistryID>;
    let bdbFeatureExtractionAlg: OPTIONAL<RegistryID>;
    let bdbComparisonAlg: OPTIONAL<RegistryID>;
    let bdbCompressionAlg: OPTIONAL<RegistryID>;
    let bdbQuality: OPTIONAL<ConstructedQuality>;
    let bdbPADMechanism: OPTIONAL<RegistryID>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "bdbFormat": (_el: _Element): void => { bdbFormat = $._decode_implicit<BDBFormat>(() => _decode_BDBFormat)(_el); },
        "bdbEncryption": (_el: _Element): void => { bdbEncryption = $._decode_implicit<EncryptionOptions>(() => _decode_EncryptionOptions)(_el); },
        "bdbBiometric": (_el: _Element): void => { bdbBiometric = $._decode_implicit<SBIR_bdbInfo_bdbBiometric>(() => _decode_SBIR_bdbInfo_bdbBiometric)(_el); },
        "bdbProcessedLevel": (_el: _Element): void => { bdbProcessedLevel = $._decode_implicit<ProcessedLevel>(() => _decode_ProcessedLevel)(_el); },
        "bdbPurpose": (_el: _Element): void => { bdbPurpose = $._decode_implicit<Purpose>(() => _decode_Purpose)(_el); },
        "bdbCreationDate": (_el: _Element): void => { bdbCreationDate = $._decode_implicit<DATE_TIME>(() => $._decodeDateTime)(_el); },
        "bdbValidityPeriod": (_el: _Element): void => { bdbValidityPeriod = $._decode_implicit<ValidityPeriod>(() => _decode_ValidityPeriod)(_el); },
        "bdbChallengeResponse": (_el: _Element): void => { bdbChallengeResponse = $._decode_implicit<ChallengeResponse>(() => _decode_ChallengeResponse)(_el); },
        "bdbIndex": (_el: _Element): void => { bdbIndex = $._decode_implicit<BDBIndex>(() => _decode_BDBIndex)(_el); },
        "bdbProduct": (_el: _Element): void => { bdbProduct = $._decode_implicit<Product>(() => _decode_Product)(_el); },
        "bdbCaptureDevice": (_el: _Element): void => { bdbCaptureDevice = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "bdbFeatureExtractionAlg": (_el: _Element): void => { bdbFeatureExtractionAlg = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "bdbComparisonAlg": (_el: _Element): void => { bdbComparisonAlg = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "bdbCompressionAlg": (_el: _Element): void => { bdbCompressionAlg = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "bdbQuality": (_el: _Element): void => { bdbQuality = $._decode_implicit<ConstructedQuality>(() => _decode_ConstructedQuality)(_el); },
        "bdbPADMechanism": (_el: _Element): void => { bdbPADMechanism = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SBIR_bdbInfo,
        _extension_additions_list_spec_for_SBIR_bdbInfo,
        _root_component_type_list_2_spec_for_SBIR_bdbInfo,
        undefined,
    );
    return new SBIR_bdbInfo( /* SET_CONSTRUCTOR_CALL */
        bdbFormat,
        bdbEncryption,
        bdbBiometric,
        bdbProcessedLevel,
        bdbPurpose,
        bdbCreationDate,
        bdbValidityPeriod,
        bdbChallengeResponse,
        bdbIndex,
        bdbProduct,
        bdbCaptureDevice,
        bdbFeatureExtractionAlg,
        bdbComparisonAlg,
        bdbCompressionAlg,
        bdbQuality,
        bdbPADMechanism
    );
}; }
    return _cached_decoder_for_SBIR_bdbInfo(el);
}

let _cached_encoder_for_SBIR_bdbInfo: $.ASN1Encoder<SBIR_bdbInfo> | null = null;

/**
 * @summary Encodes a(n) SBIR_bdbInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIR_bdbInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SBIR_bdbInfo (value: SBIR_bdbInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIR_bdbInfo) { _cached_encoder_for_SBIR_bdbInfo = function (value: SBIR_bdbInfo, elGetter: $.ASN1Encoder<SBIR_bdbInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_BDBFormat, $.BER)(value.bdbFormat, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EncryptionOptions, $.BER)(value.bdbEncryption, $.BER));
    if (value.bdbBiometric !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SBIR_bdbInfo_bdbBiometric, $.BER)(value.bdbBiometric, $.BER));
    }
    if (value.bdbProcessedLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ProcessedLevel, $.BER)(value.bdbProcessedLevel, $.BER));
    }
    if (value.bdbPurpose !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_Purpose, $.BER)(value.bdbPurpose, $.BER));
    }
    if (value.bdbCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeDateTime, $.BER)(value.bdbCreationDate, $.BER));
    }
    if (value.bdbValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ValidityPeriod, $.BER)(value.bdbValidityPeriod, $.BER));
    }
    if (value.bdbChallengeResponse !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_ChallengeResponse, $.BER)(value.bdbChallengeResponse, $.BER));
    }
    if (value.bdbIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_BDBIndex, $.BER)(value.bdbIndex, $.BER));
    }
    if (value.bdbProduct !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Product, $.BER)(value.bdbProduct, $.BER));
    }
    if (value.bdbCaptureDevice !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RegistryID, $.BER)(value.bdbCaptureDevice, $.BER));
    }
    if (value.bdbFeatureExtractionAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RegistryID, $.BER)(value.bdbFeatureExtractionAlg, $.BER));
    }
    if (value.bdbComparisonAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_RegistryID, $.BER)(value.bdbComparisonAlg, $.BER));
    }
    if (value.bdbCompressionAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_RegistryID, $.BER)(value.bdbCompressionAlg, $.BER));
    }
    if (value.bdbQuality !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_ConstructedQuality, $.BER)(value.bdbQuality, $.BER));
    }
    if (value.bdbPADMechanism !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_RegistryID, $.BER)(value.bdbPADMechanism, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SBIR_bdbInfo(value, elGetter);
}

/* eslint-enable */
