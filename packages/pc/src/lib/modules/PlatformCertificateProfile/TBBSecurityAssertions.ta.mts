/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    IA5String,
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
import { CommonCriteriaMeasures, _decode_CommonCriteriaMeasures, _encode_CommonCriteriaMeasures } from "../PlatformCertificateProfile/CommonCriteriaMeasures.ta.mjs";
import { FIPSLevel, _decode_FIPSLevel, _encode_FIPSLevel } from "../PlatformCertificateProfile/FIPSLevel.ta.mjs";
import { MeasurementRootType, _enum_for_MeasurementRootType, _decode_MeasurementRootType, _encode_MeasurementRootType } from "../PlatformCertificateProfile/MeasurementRootType.ta.mjs";
import {
    Version,
    _decode_Version,
    _encode_Version,
    v1,
} from "./Version.ta.mjs";


/**
 * @summary TBBSecurityAssertions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBBSecurityAssertions ::= SEQUENCE {
 *     version             Version DEFAULT v1,
 *     ccInfo              [0] IMPLICIT CommonCriteriaMeasures OPTIONAL,
 *     fipsLevel           [1] IMPLICIT FIPSLevel OPTIONAL,
 *     rtmType             [2] IMPLICIT MeasurementRootType OPTIONAL,
 *     iso9000Certified    BOOLEAN DEFAULT FALSE,
 *     iso9000Uri          IA5String (SIZE (1..urimax)) OPTIONAL }
 * ```
 *
 * @class
 */
export
class TBBSecurityAssertions {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `ccInfo`.
         * @public
         * @readonly
         */
        readonly ccInfo: OPTIONAL<CommonCriteriaMeasures>,
        /**
         * @summary `fipsLevel`.
         * @public
         * @readonly
         */
        readonly fipsLevel: OPTIONAL<FIPSLevel>,
        /**
         * @summary `rtmType`.
         * @public
         * @readonly
         */
        readonly rtmType: OPTIONAL<MeasurementRootType>,
        /**
         * @summary `iso9000Certified`.
         * @public
         * @readonly
         */
        readonly iso9000Certified: OPTIONAL<BOOLEAN>,
        /**
         * @summary `iso9000Uri`.
         * @public
         * @readonly
         */
        readonly iso9000Uri: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a TBBSecurityAssertions
     * @description
     *
     * This takes an `object` and converts it to a `TBBSecurityAssertions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBBSecurityAssertions`.
     * @returns {TBBSecurityAssertions}
     */
    public static _from_object (_o: { [_K in keyof (TBBSecurityAssertions)]: (TBBSecurityAssertions)[_K] }): TBBSecurityAssertions {
        return new TBBSecurityAssertions(_o.version, _o.ccInfo, _o.fipsLevel, _o.rtmType, _o.iso9000Certified, _o.iso9000Uri);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return v1; }
    /**
     * @summary Getter that returns the default value for `iso9000Certified`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_iso9000Certified () { return false; }        /**
         * @summary The enum used as the type of the component `rtmType`
         * @public
         * @static
         */

    public static _enum_for_rtmType = _enum_for_MeasurementRootType;
}

/**
 * @summary The Leading Root Component Types of TBBSecurityAssertions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBBSecurityAssertions: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, _UniversalType.integer)),
    new $.ComponentSpec("ccInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fipsLevel", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rtmType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iso9000Certified", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("iso9000Uri", true, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of TBBSecurityAssertions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBBSecurityAssertions: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of TBBSecurityAssertions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TBBSecurityAssertions: $.ComponentSpec[] = [

];

let _cached_decoder_for_TBBSecurityAssertions: $.ASN1Decoder<TBBSecurityAssertions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBBSecurityAssertions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBBSecurityAssertions} The decoded data structure.
 */
export
function _decode_TBBSecurityAssertions (el: _Element): TBBSecurityAssertions {
    if (!_cached_decoder_for_TBBSecurityAssertions) { _cached_decoder_for_TBBSecurityAssertions = function (el: _Element): TBBSecurityAssertions {
    let version: OPTIONAL<Version> = TBBSecurityAssertions._default_value_for_version;
    let ccInfo: OPTIONAL<CommonCriteriaMeasures>;
    let fipsLevel: OPTIONAL<FIPSLevel>;
    let rtmType: OPTIONAL<MeasurementRootType>;
    let iso9000Certified: OPTIONAL<BOOLEAN> = TBBSecurityAssertions._default_value_for_iso9000Certified;
    let iso9000Uri: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_Version(_el); },
        "ccInfo": (_el: _Element): void => { ccInfo = $._decode_implicit<CommonCriteriaMeasures>(() => _decode_CommonCriteriaMeasures)(_el); },
        "fipsLevel": (_el: _Element): void => { fipsLevel = $._decode_implicit<FIPSLevel>(() => _decode_FIPSLevel)(_el); },
        "rtmType": (_el: _Element): void => { rtmType = $._decode_implicit<MeasurementRootType>(() => _decode_MeasurementRootType)(_el); },
        "iso9000Certified": (_el: _Element): void => { iso9000Certified = $._decodeBoolean(_el); },
        "iso9000Uri": (_el: _Element): void => { iso9000Uri = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBBSecurityAssertions,
        _extension_additions_list_spec_for_TBBSecurityAssertions,
        _root_component_type_list_2_spec_for_TBBSecurityAssertions,
        undefined,
    );
    return new TBBSecurityAssertions( 
        version,
        ccInfo,
        fipsLevel,
        rtmType,
        iso9000Certified,
        iso9000Uri
    );
}; }
    return _cached_decoder_for_TBBSecurityAssertions(el);
}

let _cached_encoder_for_TBBSecurityAssertions: $.ASN1Encoder<TBBSecurityAssertions> | null = null;

/**
 * @summary Encodes a(n) TBBSecurityAssertions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBBSecurityAssertions, encoded as an ASN.1 Element.
 */
export
function _encode_TBBSecurityAssertions (value: TBBSecurityAssertions, elGetter: $.ASN1Encoder<TBBSecurityAssertions>): _Element {
    if (!_cached_encoder_for_TBBSecurityAssertions) { _cached_encoder_for_TBBSecurityAssertions = function (value: TBBSecurityAssertions): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || $.deepEq(value.version, TBBSecurityAssertions._default_value_for_version) ? undefined : _encode_Version(value.version, $.DER)),
            /* IF_ABSENT  */ ((value.ccInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonCriteriaMeasures, $.DER)(value.ccInfo, $.DER)),
            /* IF_ABSENT  */ ((value.fipsLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FIPSLevel, $.DER)(value.fipsLevel, $.DER)),
            /* IF_ABSENT  */ ((value.rtmType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MeasurementRootType, $.DER)(value.rtmType, $.DER)),
            /* IF_DEFAULT */ (value.iso9000Certified === undefined || $.deepEq(value.iso9000Certified, TBBSecurityAssertions._default_value_for_iso9000Certified) ? undefined : $._encodeBoolean(value.iso9000Certified, $.DER)),
            /* IF_ABSENT  */ ((value.iso9000Uri === undefined) ? undefined : $._encodeIA5String(value.iso9000Uri, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_TBBSecurityAssertions(value, elGetter);
}


/* eslint-enable */
