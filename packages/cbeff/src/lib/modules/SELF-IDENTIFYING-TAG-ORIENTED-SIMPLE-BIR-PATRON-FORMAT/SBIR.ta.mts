/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../CBEFF-DATA-ELEMENTS/Version.ta.mjs";
import { SBIR_bdbData, _decode_SBIR_bdbData, _encode_SBIR_bdbData } from "../SELF-IDENTIFYING-TAG-ORIENTED-SIMPLE-BIR-PATRON-FORMAT/SBIR-bdbData.ta.mjs";
import { SBIR_bdbInfo, _decode_SBIR_bdbInfo, _encode_SBIR_bdbInfo } from "../SELF-IDENTIFYING-TAG-ORIENTED-SIMPLE-BIR-PATRON-FORMAT/SBIR-bdbInfo.ta.mjs";
import { SBIR_birInfo, _decode_SBIR_birInfo, _encode_SBIR_birInfo } from "../SELF-IDENTIFYING-TAG-ORIENTED-SIMPLE-BIR-PATRON-FORMAT/SBIR-birInfo.ta.mjs";
import { SBIR_sbInfo, _decode_SBIR_sbInfo, _encode_SBIR_sbInfo } from "../SELF-IDENTIFYING-TAG-ORIENTED-SIMPLE-BIR-PATRON-FORMAT/SBIR-sbInfo.ta.mjs";

/**
 * @summary SBIR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIR ::= [APPLICATION 96] IMPLICIT SEQUENCE {
 *     birSelfId               [6]   RegistryID,
 *     cbeffVersion            [28]  Version,
 *     patronHeaderVersion     [0]   Version,
 *     birInfo                 [7]   SET {
 *         birIntegrity              [0]   IntegrityOptions,
 *         birCreationDate           [24]  DATE-TIME OPTIONAL,
 *         birValidityPeriod         [27]  ValidityPeriod OPTIONAL,
 *         birCreator                [4]   Creator OPTIONAL,
 *         birIndex                  [16]  BIRIndex OPTIONAL,
 *         birPayload                [1]   Payload OPTIONAL,
 *         birPointer                [2]   OCTET STRING (SIZE(0..65535)) OPTIONAL
 *     },
 *     bdbInfo                    [3] SET {
 *         bdbFormat               [7]   BDBFormat,
 *         bdbEncryption           [0]   EncryptionOptions,
 *         bdbBiometric            [1]   SEQUENCE {
 *             bdbBiometricType          [1] BiometricType,
 *             bdbBiometricSubtype       [2] BiometricSubtype OPTIONAL
 *         } OPTIONAL,
 *         bdbProcessedLevel       [21]  ProcessedLevel OPTIONAL,
 *         bdbPurpose              [22]  Purpose OPTIONAL,
 *         bdbCreationDate         [3]   DATE-TIME OPTIONAL,
 *         bdbValidityPeriod       [5]   ValidityPeriod OPTIONAL,
 *         bdbChallengeResponse    [19]  ChallengeResponse OPTIONAL,
 *         bdbIndex                [20]  BDBIndex OPTIONAL,
 *         bdbProduct              [6]   Product OPTIONAL,
 *         bdbCaptureDevice        [2]   RegistryID OPTIONAL,
 *         bdbFeatureExtractionAlg [4]   RegistryID OPTIONAL,
 *         bdbComparisonAlg        [9]   RegistryID OPTIONAL,
 *         bdbCompressionAlg       [10]  RegistryID OPTIONAL,
 *         bdbQuality              [23]  ConstructedQuality OPTIONAL,
 *         bdbPADMechanism         [29]  RegistryID OPTIONAL
 *     },
 *     sbInfo                     [4] SET { sbFormat [0] RegistryID } OPTIONAL,
 *     bdbData                  [APPLICATION 46] SET {
 *         challengeCardholder  [0] CardholderChallengeType OPTIONAL,
 *         -- defined in BDB-DATA-ELEMENTS
 *         standardBDB          [1] StandardBDBType OPTIONAL,
 *         -- defined in BDB-DATA-ELEMENTS
 *         proprietaryBDB       [2] ProprietaryBDBType OPTIONAL,
 *         -- defined in BDB-DATA-ELEMENTS
 *         referenceQualifier   [3] OCTET STRING (SIZE(1)) OPTIONAL,
 *         biometricData        [APPLICATION 46] OCTET STRING OPTIONAL
 *     } OPTIONAL,
 *     sb                         [18]  OCTET STRING (SIZE(0..4294967295)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SBIR {
    /**
     * @summary `birSelfId`.
     * @public
     * @readonly
     */
    readonly birSelfId: RegistryID;
    /**
     * @summary `cbeffVersion`.
     * @public
     * @readonly
     */
    readonly cbeffVersion: Version;
    /**
     * @summary `patronHeaderVersion`.
     * @public
     * @readonly
     */
    readonly patronHeaderVersion: Version;
    /**
     * @summary `birInfo`.
     * @public
     * @readonly
     */
    readonly birInfo: SBIR_birInfo;
    /**
     * @summary `bdbInfo`.
     * @public
     * @readonly
     */
    readonly bdbInfo: SBIR_bdbInfo;
    /**
     * @summary `sbInfo`.
     * @public
     * @readonly
     */
    readonly sbInfo: OPTIONAL<SBIR_sbInfo>;
    /**
     * @summary `bdbData`.
     * @public
     * @readonly
     */
    readonly bdbData: OPTIONAL<SBIR_bdbData>;
    /**
     * @summary `sb`.
     * @public
     * @readonly
     */
    readonly sb: OPTIONAL<OCTET_STRING>;

    constructor (
        birSelfId: RegistryID,
        cbeffVersion: Version,
        patronHeaderVersion: Version,
        birInfo: SBIR_birInfo,
        bdbInfo: SBIR_bdbInfo,
        sbInfo?: OPTIONAL<SBIR_sbInfo>,
        bdbData?: OPTIONAL<SBIR_bdbData>,
        sb?: OPTIONAL<OCTET_STRING>
    ) {
        if (sb !== undefined) assertOctetSize(sb, 0, 4294967295, "SBIR.sb");
        this.birSelfId = birSelfId;
        this.cbeffVersion = cbeffVersion;
        this.patronHeaderVersion = patronHeaderVersion;
        this.birInfo = birInfo;
        this.bdbInfo = bdbInfo;
        this.sbInfo = sbInfo;
        this.bdbData = bdbData;
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a SBIR
     * @description
     * 
     * This takes an `object` and converts it to a `SBIR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBIR`.
     * @returns {SBIR}
     */
    public static _from_object (_o: { [_K in keyof (SBIR)]: (SBIR)[_K] }): SBIR {
        return new SBIR(_o.birSelfId, _o.cbeffVersion, _o.patronHeaderVersion, _o.birInfo, _o.bdbInfo, _o.sbInfo, _o.bdbData, _o.sb);
    }

}

/**
 * @summary The Leading Root Component Types of SBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SBIR: $.ComponentSpec[] = [
    new $.ComponentSpec("birSelfId", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cbeffVersion", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("patronHeaderVersion", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("birInfo", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sbInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbData", true, $.hasTag(_TagClass.application, 46)),
    new $.ComponentSpec("sb", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of SBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SBIR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SBIR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SBIR: $.ASN1Decoder<SBIR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIR (el: _Element): SBIR {
    if (!_cached_decoder_for_SBIR) { _cached_decoder_for_SBIR = $._decode_implicit<SBIR>(() => function (el: _Element): SBIR {
    let birSelfId!: RegistryID;
    let cbeffVersion!: Version;
    let patronHeaderVersion!: Version;
    let birInfo!: SBIR_birInfo;
    let bdbInfo!: SBIR_bdbInfo;
    let sbInfo: OPTIONAL<SBIR_sbInfo>;
    let bdbData: OPTIONAL<SBIR_bdbData>;
    let sb: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "birSelfId": (_el: _Element): void => { birSelfId = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "cbeffVersion": (_el: _Element): void => { cbeffVersion = $._decode_implicit<Version>(() => _decode_Version)(_el); },
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decode_implicit<Version>(() => _decode_Version)(_el); },
        "birInfo": (_el: _Element): void => { birInfo = $._decode_implicit<SBIR_birInfo>(() => _decode_SBIR_birInfo)(_el); },
        "bdbInfo": (_el: _Element): void => { bdbInfo = $._decode_implicit<SBIR_bdbInfo>(() => _decode_SBIR_bdbInfo)(_el); },
        "sbInfo": (_el: _Element): void => { sbInfo = $._decode_implicit<SBIR_sbInfo>(() => _decode_SBIR_sbInfo)(_el); },
        "bdbData": (_el: _Element): void => { bdbData = $._decode_implicit<SBIR_bdbData>(() => _decode_SBIR_bdbData)(_el); },
        "sb": (_el: _Element): void => { sb = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SBIR,
        _extension_additions_list_spec_for_SBIR,
        _root_component_type_list_2_spec_for_SBIR,
        undefined,
    );
    return new SBIR(
        birSelfId,
        cbeffVersion,
        patronHeaderVersion,
        birInfo,
        bdbInfo,
        sbInfo,
        bdbData,
        sb
    );
}); }
    return _cached_decoder_for_SBIR(el);
}

let _cached_encoder_for_SBIR: $.ASN1Encoder<SBIR> | null = null;

/**
 * @summary Encodes a(n) SBIR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIR, encoded as an ASN.1 Element.
 */
export
function _encode_SBIR (value: SBIR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIR) { _cached_encoder_for_SBIR = $._encode_implicit(_TagClass.application, 96, () => function (value: SBIR, elGetter: $.ASN1Encoder<SBIR>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RegistryID, $.BER)(value.birSelfId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => _encode_Version, $.BER)(value.cbeffVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Version, $.BER)(value.patronHeaderVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_SBIR_birInfo, $.BER)(value.birInfo, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIR_bdbInfo, $.BER)(value.bdbInfo, $.BER));
    if (value.sbInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SBIR_sbInfo, $.BER)(value.sbInfo, $.BER));
    }
    if (value.bdbData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 46, () => _encode_SBIR_bdbData, $.BER)(value.bdbData, $.BER));
    }
    if (value.sb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.sb, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}, $.BER); }
    return _cached_encoder_for_SBIR(value, elGetter);
}

/* eslint-enable */
