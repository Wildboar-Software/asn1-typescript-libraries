/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
    type INTEGER,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../EKCredentialProfileV2/strmax.va.mjs";



/**
 * @summary TPMSpecification
 * @description
 *
 * TPM family, level, and revision of the TCG TPM specification the TPM
 * implements. The profile's example of a public TPM 2.0 specification version
 * 0.99 is family "2.0", level 0, and revision 99. Family is a UTF-8 string; the
 * defined values are ASCII. Optional in the subject directory attributes
 * extension (§3.2.11.1).
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.3.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPMSpecification ::= SEQUENCE {
 *     family      UTF8String (SIZE (1..strmax)),
 *     level       INTEGER,
 *     revision    INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class TPMSpecification {
    /**
     * @summary `family`.
     * @description
     *
     * TPM family, for example "2.0". Length 1..`strmax`.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly family: UTF8String;
    /**
     * @summary `level`.
     * @description
     *
     * Level of that family. 0 is the level used in the profile's version 0.99
     * example.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly level: INTEGER;
    /**
     * @summary `revision`.
     * @description
     *
     * Revision within that level. 99 is the revision used in the profile's
     * version 0.99 example.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.3.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly revision: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        family: UTF8String,
        level: INTEGER,
        revision: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.family = family;
        if (family.length < 1 || family.length > strmax) {
            throw new ASN1SizeError("TPMSpecification.family violates SIZE (1..strmax)");
        }
        this.level = level;
        this.revision = revision;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TPMSpecification
     * @description
     * 
     * This takes an `object` and converts it to a `TPMSpecification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TPMSpecification`.
     * @returns {TPMSpecification}
     */
    public static _from_object (_o: { [_K in keyof (TPMSpecification)]: (TPMSpecification)[_K] }): TPMSpecification {
        return new TPMSpecification(_o.family, _o.level, _o.revision, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TPMSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TPMSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("family", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("level", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("revision", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TPMSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TPMSpecification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TPMSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TPMSpecification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TPMSpecification: $.ASN1Decoder<TPMSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TPMSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TPMSpecification (el: _Element): TPMSpecification {
    if (!_cached_decoder_for_TPMSpecification) { _cached_decoder_for_TPMSpecification = function (el: _Element): TPMSpecification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TPMSpecification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "family";
    sequence[1].name = "level";
    sequence[2].name = "revision";
    let family!: UTF8String;
    let level!: INTEGER;
    let revision!: INTEGER;
    family = $._decodeUTF8String(sequence[0]);
    level = $._decodeInteger(sequence[1]);
    revision = $._decodeInteger(sequence[2]);
    return new TPMSpecification(
        family,
        level,
        revision,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_TPMSpecification(el);
}

let _cached_encoder_for_TPMSpecification: $.ASN1Encoder<TPMSpecification> | null = null;

/**
 * @summary Encodes a(n) TPMSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TPMSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_TPMSpecification (value: TPMSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TPMSpecification) { _cached_encoder_for_TPMSpecification = function (value: TPMSpecification): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeUTF8String(value.family, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeInteger(value.level, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeInteger(value.revision, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TPMSpecification(value, elGetter);
}


/* eslint-enable */
