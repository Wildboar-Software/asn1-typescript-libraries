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
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
import { ReasonInfo, _decode_ReasonInfo, _encode_ReasonInfo } from "../CertificateExtensions/ReasonInfo.ta.mjs";
// export { ReasonInfo, _decode_ReasonInfo, _encode_ReasonInfo } from "../CertificateExtensions/ReasonInfo.ta.mjs";
import { RevokedCertificateGroup, _decode_RevokedCertificateGroup, _encode_RevokedCertificateGroup } from "../CertificateExtensions/RevokedCertificateGroup.ta.mjs";
// export { RevokedCertificateGroup, _decode_RevokedCertificateGroup, _encode_RevokedCertificateGroup } from "../CertificateExtensions/RevokedCertificateGroup.ta.mjs";


/**
 * @summary RevokedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RevokedGroup ::= SEQUENCE {
 *   certificateIssuer        [0]  GeneralName OPTIONAL,
 *   reasonInfo               [1]  ReasonInfo OPTIONAL,
 *   invalidityDate           [2]  GeneralizedTime OPTIONAL,
 *   revokedcertificateGroup  [3]  RevokedCertificateGroup,
 *   ... }
 * ```
 * 
 * @class
 */
export
class RevokedGroup {
    constructor (
        /**
         * @summary `certificateIssuer`.
         * @public
         * @readonly
         */
        readonly certificateIssuer: OPTIONAL<GeneralName>,
        /**
         * @summary `reasonInfo`.
         * @public
         * @readonly
         */
        readonly reasonInfo: OPTIONAL<ReasonInfo>,
        /**
         * @summary `invalidityDate`.
         * @public
         * @readonly
         */
        readonly invalidityDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `revokedcertificateGroup`.
         * @public
         * @readonly
         */
        readonly revokedcertificateGroup: RevokedCertificateGroup,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RevokedGroup
     * @description
     * 
     * This takes an `object` and converts it to a `RevokedGroup`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevokedGroup`.
     * @returns {RevokedGroup}
     */
    public static _from_object (_o: { [_K in keyof (RevokedGroup)]: (RevokedGroup)[_K] }): RevokedGroup {
        return new RevokedGroup(_o.certificateIssuer, _o.reasonInfo, _o.invalidityDate, _o.revokedcertificateGroup, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RevokedGroup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RevokedGroup: $.ComponentSpec[] = [
    new $.ComponentSpec("certificateIssuer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reasonInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("invalidityDate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("revokedcertificateGroup", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RevokedGroup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RevokedGroup: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RevokedGroup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RevokedGroup: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RevokedGroup: $.ASN1Decoder<RevokedGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevokedGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RevokedGroup (el: _Element): RevokedGroup {
    if (!_cached_decoder_for_RevokedGroup) { _cached_decoder_for_RevokedGroup = function (el: _Element): RevokedGroup {
    let certificateIssuer: OPTIONAL<GeneralName>;
    let reasonInfo: OPTIONAL<ReasonInfo>;
    let invalidityDate: OPTIONAL<GeneralizedTime>;
    let revokedcertificateGroup!: RevokedCertificateGroup;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "certificateIssuer": (_el: _Element): void => { certificateIssuer = $._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "reasonInfo": (_el: _Element): void => { reasonInfo = $._decode_implicit<ReasonInfo>(() => _decode_ReasonInfo)(_el); },
        "invalidityDate": (_el: _Element): void => { invalidityDate = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "revokedcertificateGroup": (_el: _Element): void => { revokedcertificateGroup = $._decode_explicit<RevokedCertificateGroup>(() => _decode_RevokedCertificateGroup)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RevokedGroup,
        _extension_additions_list_spec_for_RevokedGroup,
        _root_component_type_list_2_spec_for_RevokedGroup,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RevokedGroup(
        certificateIssuer,
        reasonInfo,
        invalidityDate,
        revokedcertificateGroup,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RevokedGroup(el);
}

let _cached_encoder_for_RevokedGroup: $.ASN1Encoder<RevokedGroup> | null = null;

/**
 * @summary Encodes a(n) RevokedGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedGroup, encoded as an ASN.1 Element.
 */
export
function _encode_RevokedGroup (value: RevokedGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RevokedGroup) { _cached_encoder_for_RevokedGroup = function (value: RevokedGroup, elGetter: $.ASN1Encoder<RevokedGroup>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.certificateIssuer === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_GeneralName, $.BER)(value.certificateIssuer, $.BER)),
            /* IF_ABSENT  */ ((value.reasonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ReasonInfo, $.BER)(value.reasonInfo, $.BER)),
            /* IF_ABSENT  */ ((value.invalidityDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.invalidityDate, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_RevokedCertificateGroup, $.BER)(value.revokedcertificateGroup, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RevokedGroup(value, elGetter);
}


/* eslint-enable */
