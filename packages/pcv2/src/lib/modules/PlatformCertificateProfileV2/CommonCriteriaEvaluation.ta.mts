/* eslint-disable */
import {
    ASN1SizeError,
    GeneralizedTime,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { CommonCriteriaMeasures, _decode_CommonCriteriaMeasures, _encode_CommonCriteriaMeasures } from "../EKCredentialProfileV2/CommonCriteriaMeasures.ta.mjs";


/**
 * @summary CommonCriteriaEvaluation
 * @description
 *
 * Common Criteria evaluation of a target, plus identification of the Common
 * Criteria certificate. The certificate is identified at least by its number
 * and by the name of the entity that issued it, for example the scheme. Carried
 * by `commonCriteriaTrait` with category `tcg-tr-cat-CommonCriteria`. The
 * profile and the target inside `cCMeasures` may each be an object identifier,
 * a URI reference, or both; when both are present they are consistent.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonCriteriaEvaluation ::= SEQUENCE {
 *     cCMeasures                  CommonCriteriaMeasures,
 *     cCCertificateNumber         UTF8String (SIZE (1..strmax)),
 *     cCCertificateAuthority      UTF8String (SIZE (1..strmax)),
 *     evaluationScheme            [0] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     cCCertificateIssuanceDate   [1] IMPLICIT GeneralizedTime OPTIONAL,
 *     cCCertificateExpiryDate     [2] IMPLICIT GeneralizedTime OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CommonCriteriaEvaluation {
    /**
     * @summary `cCMeasures`.
     * @description
     *
     * Evaluation measures defined by the endorsement-key credential profile:
     * assurance level, status, and the profile and target identifiers.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly cCMeasures: CommonCriteriaMeasures;
    /**
     * @summary `cCCertificateNumber`.
     * @description
     *
     * Number of the Common Criteria certificate, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly cCCertificateNumber: UTF8String;
    /**
     * @summary `cCCertificateAuthority`.
     * @description
     *
     * Name of the entity that issued the Common Criteria certificate, for
     * example the scheme. Length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly cCCertificateAuthority: UTF8String;
    /**
     * @summary `evaluationScheme`.
     * @description
     *
     * Optional evaluation scheme, length 1..`strmax`. The profile does not
     * define a vocabulary for this string.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly evaluationScheme: OPTIONAL<UTF8String>;
    /**
     * @summary `cCCertificateIssuanceDate`.
     * @description
     *
     * Optional issuance date of the Common Criteria certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly cCCertificateIssuanceDate: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `cCCertificateExpiryDate`.
     * @description
     *
     * Optional expiry date of the Common Criteria certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly cCCertificateExpiryDate: OPTIONAL<GeneralizedTime>;

    constructor (
        cCMeasures: CommonCriteriaMeasures,
        cCCertificateNumber: UTF8String,
        cCCertificateAuthority: UTF8String,
        evaluationScheme?: OPTIONAL<UTF8String>,
        cCCertificateIssuanceDate?: OPTIONAL<GeneralizedTime>,
        cCCertificateExpiryDate?: OPTIONAL<GeneralizedTime>
    ) {
        this.cCMeasures = cCMeasures;
        this.cCCertificateNumber = cCCertificateNumber;
        this.cCCertificateAuthority = cCCertificateAuthority;
        this.evaluationScheme = evaluationScheme;
        this.cCCertificateIssuanceDate = cCCertificateIssuanceDate;
        this.cCCertificateExpiryDate = cCCertificateExpiryDate;
        if (cCCertificateNumber.length < 1 || cCCertificateNumber.length > strmax) {
            throw new ASN1SizeError("CommonCriteriaEvaluation.cCCertificateNumber violates SIZE (1..strmax)");
        }
        if (cCCertificateAuthority.length < 1 || cCCertificateAuthority.length > strmax) {
            throw new ASN1SizeError("CommonCriteriaEvaluation.cCCertificateAuthority violates SIZE (1..strmax)");
        }
        if (evaluationScheme !== undefined && (evaluationScheme.length < 1 || evaluationScheme.length > strmax)) {
            throw new ASN1SizeError("CommonCriteriaEvaluation.evaluationScheme violates SIZE (1..strmax)");
        }
    }

    /**
     * @summary Restructures an object into a CommonCriteriaEvaluation
     * @description
     * 
     * This takes an `object` and converts it to a `CommonCriteriaEvaluation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonCriteriaEvaluation`.
     * @returns {CommonCriteriaEvaluation}
     */
    public static _from_object (_o: { [_K in keyof (CommonCriteriaEvaluation)]: (CommonCriteriaEvaluation)[_K] }): CommonCriteriaEvaluation {
        return new CommonCriteriaEvaluation(_o.cCMeasures, _o.cCCertificateNumber, _o.cCCertificateAuthority, _o.evaluationScheme, _o.cCCertificateIssuanceDate, _o.cCCertificateExpiryDate);
    }


}

/**
 * @summary The Leading Root Component Types of CommonCriteriaEvaluation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonCriteriaEvaluation: $.ComponentSpec[] = [
    new $.ComponentSpec("cCMeasures", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("cCCertificateNumber", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("cCCertificateAuthority", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("evaluationScheme", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cCCertificateIssuanceDate", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCCertificateExpiryDate", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommonCriteriaEvaluation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonCriteriaEvaluation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonCriteriaEvaluation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonCriteriaEvaluation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonCriteriaEvaluation: $.ASN1Decoder<CommonCriteriaEvaluation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonCriteriaEvaluation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonCriteriaEvaluation (el: _Element): CommonCriteriaEvaluation {
    if (!_cached_decoder_for_CommonCriteriaEvaluation) { _cached_decoder_for_CommonCriteriaEvaluation = function (el: _Element): CommonCriteriaEvaluation {
    let cCMeasures!: CommonCriteriaMeasures;
    let cCCertificateNumber!: UTF8String;
    let cCCertificateAuthority!: UTF8String;
    let evaluationScheme: OPTIONAL<UTF8String>;
    let cCCertificateIssuanceDate: OPTIONAL<GeneralizedTime>;
    let cCCertificateExpiryDate: OPTIONAL<GeneralizedTime>;
    const callbacks: $.DecodingMap = {
        "cCMeasures": (_el: _Element): void => { cCMeasures = _decode_CommonCriteriaMeasures(_el); },
        "cCCertificateNumber": (_el: _Element): void => { cCCertificateNumber = $._decodeUTF8String(_el); },
        "cCCertificateAuthority": (_el: _Element): void => { cCCertificateAuthority = $._decodeUTF8String(_el); },
        "evaluationScheme": (_el: _Element): void => { evaluationScheme = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cCCertificateIssuanceDate": (_el: _Element): void => { cCCertificateIssuanceDate = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "cCCertificateExpiryDate": (_el: _Element): void => { cCCertificateExpiryDate = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonCriteriaEvaluation,
        _extension_additions_list_spec_for_CommonCriteriaEvaluation,
        _root_component_type_list_2_spec_for_CommonCriteriaEvaluation,
        undefined,
    );
    return new CommonCriteriaEvaluation(
        cCMeasures,
        cCCertificateNumber,
        cCCertificateAuthority,
        evaluationScheme,
        cCCertificateIssuanceDate,
        cCCertificateExpiryDate
    );
}; }
    return _cached_decoder_for_CommonCriteriaEvaluation(el);
}

let _cached_encoder_for_CommonCriteriaEvaluation: $.ASN1Encoder<CommonCriteriaEvaluation> | null = null;

/**
 * @summary Encodes a(n) CommonCriteriaEvaluation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonCriteriaEvaluation, encoded as an ASN.1 Element.
 */
export
function _encode_CommonCriteriaEvaluation (value: CommonCriteriaEvaluation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonCriteriaEvaluation) { _cached_encoder_for_CommonCriteriaEvaluation = function (value: CommonCriteriaEvaluation): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CommonCriteriaMeasures(value.cCMeasures, $.BER));
    _components.push(/* REQUIRED   */ $._encodeUTF8String(value.cCCertificateNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encodeUTF8String(value.cCCertificateAuthority, $.BER));
    if (value.evaluationScheme !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.evaluationScheme, $.BER));
    }
    if (value.cCCertificateIssuanceDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.cCCertificateIssuanceDate, $.BER));
    }
    if (value.cCCertificateExpiryDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.cCCertificateExpiryDate, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommonCriteriaEvaluation(value, elGetter);
}


/* eslint-enable */
