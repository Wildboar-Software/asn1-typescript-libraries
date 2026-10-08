/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LogotypeInfo, _decode_LogotypeInfo, _encode_LogotypeInfo } from "../LogotypeCertExtn/LogotypeInfo.ta.mjs";
// export { LogotypeInfo, _decode_LogotypeInfo, _encode_LogotypeInfo } from "../LogotypeCertExtn/LogotypeInfo.ta.mjs";
import { OtherLogotypeInfo, _decode_OtherLogotypeInfo, _encode_OtherLogotypeInfo } from "../LogotypeCertExtn/OtherLogotypeInfo.ta.mjs";
// export { OtherLogotypeInfo, _decode_OtherLogotypeInfo, _encode_OtherLogotypeInfo } from "../LogotypeCertExtn/OtherLogotypeInfo.ta.mjs";


/**
 * @summary LogotypeExtn
 * @description
 *
 * Value of the non-critical {@link id_pe_logotype} extension. It may
 * appear in an end-entity certificate, a CA certificate, or an
 * attribute certificate. At least one component is present. Use a
 * community, issuer, or subject logotype whenever one applies.
 *
 * Logotypes are for human recognition. Certification path validation
 * ignores this extension, as does any other automated processing.
 * Display logotypes only for a certificate whose path has validated,
 * and display them alongside the certificate's other identity
 * information. A client that cannot present a logotype behaves as
 * though the extension were absent, and does not report an error.
 * Subject to local policy, a client may show none, one, or many
 * logotypes. When several types are on screen together, the binding
 * between each image and its logotype type (community, issuer,
 * subject, or other) has to be unambiguous. A client plays at most one
 * logotype audio sequence at a time, and can disable fetching; a
 * cached copy may still be shown.
 *
 * Fetching a logotype lets an observer of that host see that a client
 * holds a certificate which references it. A cache hides later uses;
 * an uncached fetch also shows how often.
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1),
 * [section 5](https://www.rfc-editor.org/rfc/rfc3709#section-5),
 * [section 6](https://www.rfc-editor.org/rfc/rfc3709#section-6),
 * and [section 7](https://www.rfc-editor.org/rfc/rfc3709#section-7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeExtn ::= SEQUENCE {
 *    communityLogos  [0] EXPLICIT SEQUENCE OF LogotypeInfo OPTIONAL,
 *    issuerLogo      [1] EXPLICIT LogotypeInfo OPTIONAL,
 *    subjectLogo     [2] EXPLICIT LogotypeInfo OPTIONAL,
 *    otherLogos      [3] EXPLICIT SEQUENCE OF OtherLogotypeInfo OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeExtn {
    constructor (
        /**
         * Community logotypes for communities with which the issuer is
         * affiliated. Each entry is a different community. A community
         * logotype is a shared service mark: many issuers co-brand one
         * widely recognized mark, as independent card issuers do with
         * a global card brand. Order is preference, most preferred
         * first and least preferred last. A client may show a subset
         * of this sequence.
         *
         * The issuer asserts the affiliation. How the issuer checks
         * that claim is outside the scope of RFC 3709.
         *
         * [RFC 3709, section 2](https://www.rfc-editor.org/rfc/rfc3709#section-2)
         * and [section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
         * @public
         * @readonly
         */
        readonly communityLogos: OPTIONAL<LogotypeInfo[]>,
        /**
         * Logotype of the organization named as the issuer. It is
         * consistent with, and its presence requires, an organization
         * name in the organization attribute of the issuer field. The
         * issuer asserts this representation. How that is checked is
         * outside the scope of RFC 3709.
         *
         * [RFC 3709, section 2](https://www.rfc-editor.org/rfc/rfc3709#section-2)
         * and [section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
         * @public
         * @readonly
         */
        readonly issuerLogo: OPTIONAL<LogotypeInfo>,
        /**
         * Logotype of the organization named as the subject. It is
         * consistent with, and its presence requires, an organization
         * name in the organization attribute of the subject field.
         * The issuer asserts this representation. How that is checked
         * is outside the scope of RFC 3709.
         *
         * [RFC 3709, section 2](https://www.rfc-editor.org/rfc/rfc3709#section-2)
         * and [section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
         * @public
         * @readonly
         */
        readonly subjectLogo: OPTIONAL<LogotypeInfo>,
        /**
         * Logotypes outside the three standard classes: partners,
         * products, services, or anything else the local application
         * chooses to show. Each entry's OID selects the class. This
         * specification defines {@link id_logo_loyalty} (more than one
         * is allowed) and {@link id_logo_background} (at most one).
         * Any other OID is a local definition, and what it means is up
         * to the application that displays it.
         *
         * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1)
         * and [section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
         * @public
         * @readonly
         */
        readonly otherLogos: OPTIONAL<OtherLogotypeInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeExtn
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeExtn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeExtn`.
     * @returns {LogotypeExtn}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeExtn)]: (LogotypeExtn)[_K] }): LogotypeExtn {
        return new LogotypeExtn(_o.communityLogos, _o.issuerLogo, _o.subjectLogo, _o.otherLogos);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeExtn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeExtn: $.ComponentSpec[] = [
    new $.ComponentSpec("communityLogos", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuerLogo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subjectLogo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("otherLogos", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LogotypeExtn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeExtn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeExtn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeExtn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeExtn: $.ASN1Decoder<LogotypeExtn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeExtn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeExtn (el: _Element): LogotypeExtn {
    if (!_cached_decoder_for_LogotypeExtn) { _cached_decoder_for_LogotypeExtn = function (el: _Element): LogotypeExtn {
    let communityLogos: OPTIONAL<LogotypeInfo[]>;
    let issuerLogo: OPTIONAL<LogotypeInfo>;
    let subjectLogo: OPTIONAL<LogotypeInfo>;
    let otherLogos: OPTIONAL<OtherLogotypeInfo[]>;
    const callbacks: $.DecodingMap = {
        "communityLogos": (_el: _Element): void => { communityLogos = $._decode_explicit<LogotypeInfo[]>(() => $._decodeSequenceOf<LogotypeInfo>(() => _decode_LogotypeInfo))(_el); },
        "issuerLogo": (_el: _Element): void => { issuerLogo = $._decode_explicit<LogotypeInfo>(() => _decode_LogotypeInfo)(_el); },
        "subjectLogo": (_el: _Element): void => { subjectLogo = $._decode_explicit<LogotypeInfo>(() => _decode_LogotypeInfo)(_el); },
        "otherLogos": (_el: _Element): void => { otherLogos = $._decode_explicit<OtherLogotypeInfo[]>(() => $._decodeSequenceOf<OtherLogotypeInfo>(() => _decode_OtherLogotypeInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeExtn,
        _extension_additions_list_spec_for_LogotypeExtn,
        _root_component_type_list_2_spec_for_LogotypeExtn,
        undefined,
    );
    return new LogotypeExtn(
        communityLogos,
        issuerLogo,
        subjectLogo,
        otherLogos
    );
}; }
    return _cached_decoder_for_LogotypeExtn(el);
}

let _cached_encoder_for_LogotypeExtn: $.ASN1Encoder<LogotypeExtn> | null = null;

/**
 * @summary Encodes a(n) LogotypeExtn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeExtn, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeExtn (value: LogotypeExtn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeExtn) { _cached_encoder_for_LogotypeExtn = function (value: LogotypeExtn): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.communityLogos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<LogotypeInfo>(() => _encode_LogotypeInfo, $.BER), $.BER)(value.communityLogos, $.BER)),
            /* IF_ABSENT  */ ((value.issuerLogo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_LogotypeInfo, $.BER)(value.issuerLogo, $.BER)),
            /* IF_ABSENT  */ ((value.subjectLogo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LogotypeInfo, $.BER)(value.subjectLogo, $.BER)),
            /* IF_ABSENT  */ ((value.otherLogos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeSequenceOf<OtherLogotypeInfo>(() => _encode_OtherLogotypeInfo, $.BER), $.BER)(value.otherLogos, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeExtn(value, elGetter);
}


/* eslint-enable */
