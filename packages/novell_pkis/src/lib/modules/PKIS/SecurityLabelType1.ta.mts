/* eslint-disable */
import {
    ASN1SizeError,
    BIT_STRING,
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../assertIntegerRange.mjs";
import { Singletons, _decode_Singletons, _encode_Singletons } from "../PKIS/Singletons.ta.mjs";


/**
 * @summary SecurityLabelType1
 * @description
 *
 * One mandatory-access-control label: a label type, secrecy and
 * integrity levels, fixed category bit strings, and singleton
 * categories. Display names: "Secrecy Level", "Integrity Level",
 * "Secrecy Categories", "Integrity Categories", "Secrecy Singleton(s)",
 * and "Integrity Singleton(s)". §6.2.
 *
 * The greatest lower bound of a level is the minimum in the chain. The
 * bound of a category bit or singleton is the AND of that bit across
 * the chain. §3.1, §6.3. Which bits mean what depends on whether this
 * value is the root, registry, or enterprise label; those assignments
 * are on `EnterpriseId`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLabelType1 ::= SEQUENCE {
 *  labelType1 INTEGER (0..255),
 *   -- The default should be 2, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- Note that the label type for Version 1
 *   -- of Graded Authentication is 0 or 1.
 *   -- Byte sizes and reserved fields are omitted,
 *   -- because they are derivable from the ASN.1.
 *  secrecyLevel1 INTEGER (0..255),
 *   -- The default should be 0, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- 0 = low secrecy, 255 = high secrecy
 *   -- It seems highly unlikely anyone would ever
 *   -- need more than 255 secrecy levels
 *  integrityLevel1      INTEGER (0..255),
 *   -- The default should be 0, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- NOTE! 255 = low integrity, 0 = high integrity!
 *   -- It seems highly unlikely anyone would ever
 *   -- need more than 255 integrity levels
 *  secrecyCategories1   BIT STRING (SIZE(96)),
 *   -- The default should be FALSE, but DEFAULT implies OPTIONAL,
 *   -- which is not the intent. So the value has to be coded
 *   -- explicitly.
 *   -- 96 secrecy categories, 0 origin indexing
 *  integrityCategories1 BIT STRING (SIZE(64)),
 *   -- The default should be FALSE, but DEFAULT implies OPTIONAL,
 *   -- which is not the intent. So the value has to be coded
 *   -- explicitly.
 *   -- 64 integrity categories, 0 origin indexing
 *  secrecySingletons1 Singletons,
 *  integritySingletons1 Singletons
 * }
 * ```
 * 
 * @class
 */
export
class SecurityLabelType1 {
    constructor (
        /**
         * @summary `labelType1`.
         * @description
         *
         * Label format. Coded explicitly. The value that should be
         * written for this version is 2. Graded Authentication
         * version 1 uses 0 or 1. The document does not define any
         * other label type. Byte sizes are omitted because the ASN.1
         * already fixes them. Appendix F.
         *
         * @public
         * @readonly
         */
        readonly labelType1: INTEGER,
        /**
         * @summary `secrecyLevel1`.
         * @description
         *
         * Secrecy level. 0 is low and 255 is high. A subject may read
         * down and, in the model, write up, and may not read up or
         * write down. Coded explicitly; the value that would have been
         * the default is 0. §3.1.
         *
         * On a Novell registry label these levels are the Table 6
         * inter-enterprise scale, advisory outside a single enterprise.
         * See `EnterpriseId.registryLabel`.
         *
         * @public
         * @readonly
         */
        readonly secrecyLevel1: INTEGER,
        /**
         * @summary `integrityLevel1`.
         * @description
         *
         * Integrity level, numbered opposite secrecy so one dominance
         * test serves both: 255 is low integrity and 0 is high. A
         * subject may read up and write down, and may not read down or
         * write up. Coded explicitly; the value that would have been
         * the default is 0, which is high integrity. §3.1.
         *
         * Where Table 6 gives a secrecy figure N, the matching
         * integrity figure is `255 - N`. §7.2.2.
         *
         * @public
         * @readonly
         */
        readonly integrityLevel1: INTEGER,
        /**
         * @summary `secrecyCategories1`.
         * @description
         *
         * Ninety-six secrecy categories, index 0 first. A fixed-length
         * string so a chain bound is a bitwise AND. Coded explicitly;
         * an omitted default would have been all FALSE. §6.2.
         *
         * Novell bit assignments differ for the root, registry, and
         * enterprise labels. They are listed on the corresponding
         * `EnterpriseId` field.
         *
         * @public
         * @readonly
         */
        readonly secrecyCategories1: BIT_STRING,
        /**
         * @summary `integrityCategories1`.
         * @description
         *
         * Sixty-four integrity categories, index 0 first. The chain
         * bound is a bitwise AND. Coded explicitly. §6.2.
         *
         * Novell bit assignments are listed on the corresponding
         * `EnterpriseId` field. Registry integrity bit 3 is MABLE and
         * has no secrecy counterpart.
         *
         * @public
         * @readonly
         */
        readonly integrityCategories1: BIT_STRING,
        /**
         * @summary `secrecySingletons1`.
         * @description
         *
         * Secrecy categories that do not fit in the fixed bit string.
         * Each singleton is the index of one bit in a very long virtual
         * string. A singleton is usually used alone, often together
         * with a fixed category that says what the number means.
         * §6.2.
         *
         * Under root category bit 0, or registry category bit 0, the
         * number is `organizationId * 1024 + countryCode` (ISO
         * 3166:1993 in the low 10 bits). Novell's value is 116449096.
         * Under registry category bit 1 it is a NICI license number.
         * Initialize the range FALSE, then set the singletons that are
         * on. §7.1, §7.2.3.
         *
         * @public
         * @readonly
         */
        readonly secrecySingletons1: Singletons,
        /**
         * @summary `integritySingletons1`.
         * @description
         *
         * Integrity singletons. Same encoding and, in the Novell
         * assignments, the same numbers as `secrecySingletons1`. MABLE
         * checks this singleton for 116449096 together with root
         * integrity category bit 0. §7.2.4.2.
         *
         * @public
         * @readonly
         */
        readonly integritySingletons1: Singletons
    ) {
        assertIntegerRange(labelType1, 0n, 255n, "SecurityLabelType1.labelType1");
        assertIntegerRange(secrecyLevel1, 0n, 255n, "SecurityLabelType1.secrecyLevel1");
        assertIntegerRange(integrityLevel1, 0n, 255n, "SecurityLabelType1.integrityLevel1");
        if (secrecyCategories1.length !== 96) {
            throw new ASN1SizeError("SecurityLabelType1.secrecyCategories1 violates SIZE constraint");
        }
        if (integrityCategories1.length !== 64) {
            throw new ASN1SizeError("SecurityLabelType1.integrityCategories1 violates SIZE constraint");
        }
        if (secrecySingletons1.length < 1 || secrecySingletons1.length > 16) {
            throw new ASN1SizeError("SecurityLabelType1.secrecySingletons1 violates SIZE constraint");
        }
        if (integritySingletons1.length < 1 || integritySingletons1.length > 16) {
            throw new ASN1SizeError("SecurityLabelType1.integritySingletons1 violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SecurityLabelType1
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityLabelType1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLabelType1`.
     * @returns {SecurityLabelType1}
     */
    public static _from_object (_o: { [_K in keyof (SecurityLabelType1)]: (SecurityLabelType1)[_K] }): SecurityLabelType1 {
        return new SecurityLabelType1(_o.labelType1, _o.secrecyLevel1, _o.integrityLevel1, _o.secrecyCategories1, _o.integrityCategories1, _o.secrecySingletons1, _o.integritySingletons1);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityLabelType1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityLabelType1: $.ComponentSpec[] = [
    new $.ComponentSpec("labelType1", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("secrecyLevel1", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("integrityLevel1", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("secrecyCategories1", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("integrityCategories1", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("secrecySingletons1", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("integritySingletons1", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SecurityLabelType1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityLabelType1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityLabelType1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityLabelType1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityLabelType1: $.ASN1Decoder<SecurityLabelType1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabelType1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityLabelType1 (el: _Element): SecurityLabelType1 {
    if (!_cached_decoder_for_SecurityLabelType1) { _cached_decoder_for_SecurityLabelType1 = function (el: _Element): SecurityLabelType1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("SecurityLabelType1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "labelType1";
    sequence[1].name = "secrecyLevel1";
    sequence[2].name = "integrityLevel1";
    sequence[3].name = "secrecyCategories1";
    sequence[4].name = "integrityCategories1";
    sequence[5].name = "secrecySingletons1";
    sequence[6].name = "integritySingletons1";
    let labelType1!: INTEGER;
    let secrecyLevel1!: INTEGER;
    let integrityLevel1!: INTEGER;
    let secrecyCategories1!: BIT_STRING;
    let integrityCategories1!: BIT_STRING;
    let secrecySingletons1!: Singletons;
    let integritySingletons1!: Singletons;
    labelType1 = $._decodeInteger(sequence[0]);
    secrecyLevel1 = $._decodeInteger(sequence[1]);
    integrityLevel1 = $._decodeInteger(sequence[2]);
    secrecyCategories1 = $._decodeBitString(sequence[3]);
    integrityCategories1 = $._decodeBitString(sequence[4]);
    secrecySingletons1 = _decode_Singletons(sequence[5]);
    integritySingletons1 = _decode_Singletons(sequence[6]);
    return new SecurityLabelType1(
        labelType1,
        secrecyLevel1,
        integrityLevel1,
        secrecyCategories1,
        integrityCategories1,
        secrecySingletons1,
        integritySingletons1,

    );
}; }
    return _cached_decoder_for_SecurityLabelType1(el);
}

let _cached_encoder_for_SecurityLabelType1: $.ASN1Encoder<SecurityLabelType1> | null = null;

/**
 * @summary Encodes a(n) SecurityLabelType1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabelType1, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityLabelType1 (value: SecurityLabelType1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityLabelType1) { _cached_encoder_for_SecurityLabelType1 = function (value: SecurityLabelType1): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.labelType1, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.secrecyLevel1, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.integrityLevel1, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.secrecyCategories1, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.integrityCategories1, $.BER),
            /* REQUIRED   */ _encode_Singletons(value.secrecySingletons1, $.BER),
            /* REQUIRED   */ _encode_Singletons(value.integritySingletons1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityLabelType1(value, elGetter);
}


/* eslint-enable */
