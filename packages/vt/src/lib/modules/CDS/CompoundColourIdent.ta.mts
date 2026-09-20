/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { AssignmentIdent, _decode_AssignmentIdent, _encode_AssignmentIdent } from "../CDS/AssignmentIdent.ta.mjs";


/**
 * @summary CompoundColourIdent
 * @description
 *
 * Invite flags for colour-capability and colour-assignment list
 * (foreground or background). ISO/IEC 9040:1997 §18.1, §18.2.5;
 * ISO/IEC 9041-1:1997 §12.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundColourIdent ::= SEQUENCE {
 *     capability NULL OPTIONAL,
 *     assignment SEQUENCE OF AssignmentIdent OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompoundColourIdent {
    constructor (
        /**
         * @summary `capability`.
         * @description
         * Invite colour-capability (1..N; default 1). ISO/IEC
         * 9040:1997 §18.1.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<NULL>,
        /**
         * @summary `assignment`.
         * @description
         * Invite colour-assignment list slots. ISO/IEC 9040:1997
         * §18.2.5.
         * @public
         * @readonly
         */
        readonly assignment: OPTIONAL<AssignmentIdent[]>
    ) {}

    /**
     * @summary Restructures an object into a CompoundColourIdent
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundColourIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundColourIdent`.
     * @returns {CompoundColourIdent}
     */
    public static _from_object (_o: { [_K in keyof (CompoundColourIdent)]: (CompoundColourIdent)[_K] }): CompoundColourIdent {
        return new CompoundColourIdent(_o.capability, _o.assignment);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundColourIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundColourIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("assignment", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CompoundColourIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundColourIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundColourIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundColourIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundColourIdent: $.ASN1Decoder<CompoundColourIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundColourIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundColourIdent (el: _Element): CompoundColourIdent {
    if (!_cached_decoder_for_CompoundColourIdent) { _cached_decoder_for_CompoundColourIdent = function (el: _Element): CompoundColourIdent {
    let capability: OPTIONAL<NULL>;
    let assignment: OPTIONAL<AssignmentIdent[]>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decodeNull(_el); },
        "assignment": (_el: _Element): void => { assignment = $._decodeSequenceOf<AssignmentIdent>(() => _decode_AssignmentIdent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundColourIdent,
        _extension_additions_list_spec_for_CompoundColourIdent,
        _root_component_type_list_2_spec_for_CompoundColourIdent,
        undefined,
    );
    return new CompoundColourIdent(
        capability,
        assignment
    );
}; }
    return _cached_decoder_for_CompoundColourIdent(el);
}

let _cached_encoder_for_CompoundColourIdent: $.ASN1Encoder<CompoundColourIdent> | null = null;

/**
 * @summary Encodes a(n) CompoundColourIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundColourIdent, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundColourIdent (value: CompoundColourIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundColourIdent) { _cached_encoder_for_CompoundColourIdent = function (value: CompoundColourIdent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encodeNull(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.assignment === undefined) ? undefined : $._encodeSequenceOf<AssignmentIdent>(() => _encode_AssignmentIdent, $.BER)(value.assignment, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompoundColourIdent(value, elGetter);
}


/* eslint-enable */
