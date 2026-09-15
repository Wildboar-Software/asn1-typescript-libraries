/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";



/**
 * @summary UsageRules
 * @description
 *
 * GEOPRIV usage-rules for PIDF-LO location: whether
 * retransmission is allowed, when retention expires, and a
 * ruleset URI. ECMA-269 §12.2.18; RFC 4119.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UsageRules ::= SEQUENCE
 * {    retransmissionAllowed        BOOLEAN,
 *     retentionExpires        TimeInfo,    -- TimeInfo Already defined in CSTA-security
 *     rulesetReference        IA5String,    -- rulesetReference must be a URI
 *     noteWell            IA5String    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class UsageRules {
    constructor (
        /**
         * @summary `retransmissionAllowed`.
         * @description
         *
         * Whether retransmission of this location is allowed.
         * ECMA-269 §12.2.18.
         *
         * @public
         * @readonly
         */
        readonly retransmissionAllowed: BOOLEAN,
        /**
         * @summary `retentionExpires`.
         * @description
         *
         * When retention of this location must end. ECMA-269
         * §12.2.18.
         *
         * @public
         * @readonly
         */
        readonly retentionExpires: TimeInfo,
        /**
         * @summary `rulesetReference`.
         * @description
         *
         * URI of the applicable ruleset. ECMA-285 §9.9.
         *
         * @public
         * @readonly
         */
        readonly rulesetReference: IA5String,
        /**
         * @summary `noteWell`.
         * @description
         *
         * Optional human-readable usage note. ECMA-285 §9.9.
         *
         * @public
         * @readonly
         */
        readonly noteWell: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a UsageRules
     * @description
     * 
     * This takes an `object` and converts it to a `UsageRules`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsageRules`.
     * @returns {UsageRules}
     */
    public static _from_object (_o: { [_K in keyof (UsageRules)]: (UsageRules)[_K] }): UsageRules {
        return new UsageRules(_o.retransmissionAllowed, _o.retentionExpires, _o.rulesetReference, _o.noteWell);
    }


}

/**
 * @summary The Leading Root Component Types of UsageRules
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UsageRules: $.ComponentSpec[] = [
    new $.ComponentSpec("retransmissionAllowed", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("retentionExpires", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("rulesetReference", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("noteWell", true, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of UsageRules
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UsageRules: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UsageRules
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UsageRules: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UsageRules: $.ASN1Decoder<UsageRules> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UsageRules
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UsageRules (el: _Element): UsageRules {
    if (!_cached_decoder_for_UsageRules) { _cached_decoder_for_UsageRules = function (el: _Element): UsageRules {
    let retransmissionAllowed!: BOOLEAN;
    let retentionExpires!: TimeInfo;
    let rulesetReference!: IA5String;
    let noteWell: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "retransmissionAllowed": (_el: _Element): void => { retransmissionAllowed = $._decodeBoolean(_el); },
        "retentionExpires": (_el: _Element): void => { retentionExpires = _decode_TimeInfo(_el); },
        "rulesetReference": (_el: _Element): void => { rulesetReference = $._decodeIA5String(_el); },
        "noteWell": (_el: _Element): void => { noteWell = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UsageRules,
        _extension_additions_list_spec_for_UsageRules,
        _root_component_type_list_2_spec_for_UsageRules,
        undefined,
    );
    return new UsageRules(
        retransmissionAllowed,
        retentionExpires,
        rulesetReference,
        noteWell
    );
}; }
    return _cached_decoder_for_UsageRules(el);
}

let _cached_encoder_for_UsageRules: $.ASN1Encoder<UsageRules> | null = null;

/**
 * @summary Encodes a(n) UsageRules into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageRules, encoded as an ASN.1 Element.
 */
export
function _encode_UsageRules (value: UsageRules, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UsageRules) { _cached_encoder_for_UsageRules = function (value: UsageRules, elGetter: $.ASN1Encoder<UsageRules>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.retransmissionAllowed, $.BER),
            /* REQUIRED   */ _encode_TimeInfo(value.retentionExpires, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.rulesetReference, $.BER),
            /* IF_ABSENT  */ ((value.noteWell === undefined) ? undefined : $._encodeIA5String(value.noteWell, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UsageRules(value, elGetter);
}


/* eslint-enable */
