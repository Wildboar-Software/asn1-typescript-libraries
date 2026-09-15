/* eslint-disable */
import {
    OPTIONAL,
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
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";


/**
 * @summary SplitLegArg
 * @description
 * 
 * Argument of SplitLeg: which party to split off and the new Call Segment id.
 * (3GPP TS 29.078 V19.0.0 clause 11.31.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SplitLegArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     legToBeSplit            [0]    LegID,
 *     newCallSegment            [1]    CallSegmentID {bound}            OPTIONAL,
 *     extensions                [2]    Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class SplitLegArg {
    constructor (
        /**
         * @summary `legToBeSplit`.
         * @description
         *
         * Party to split from the source Call Segment. Sending Side LegID.
         * (3GPP TS 29.078 V19.0.0 clauses 4.1.5 and 11.31.1.1).
         *
         * @public
         * @readonly
         */
        readonly legToBeSplit: LegID,
        /**
         * @summary `newCallSegment`.
         * @description
         *
         * CSID to assign to the newly created Call Segment. (3GPP TS 29.078
         * V19.0.0 clause 11.31.1.1).
         *
         * @public
         * @readonly
         */
        readonly newCallSegment: OPTIONAL<CallSegmentID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SplitLegArg
     * @description
     * 
     * This takes an `object` and converts it to a `SplitLegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SplitLegArg`.
     * @returns {SplitLegArg}
     */
    public static _from_object (_o: { [_K in keyof (SplitLegArg)]: (SplitLegArg)[_K] }): SplitLegArg {
        return new SplitLegArg(_o.legToBeSplit, _o.newCallSegment, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SplitLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legToBeSplit", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newCallSegment", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SplitLegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SplitLegArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SplitLegArg: $.ASN1Decoder<SplitLegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SplitLegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SplitLegArg (el: _Element): SplitLegArg {
    if (!_cached_decoder_for_SplitLegArg) { _cached_decoder_for_SplitLegArg = function (el: _Element): SplitLegArg {
    let legToBeSplit!: LegID;
    let newCallSegment: OPTIONAL<CallSegmentID>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legToBeSplit": (_el: _Element): void => { legToBeSplit = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "newCallSegment": (_el: _Element): void => { newCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SplitLegArg,
        _extension_additions_list_spec_for_SplitLegArg,
        _root_component_type_list_2_spec_for_SplitLegArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SplitLegArg(
        legToBeSplit,
        newCallSegment,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SplitLegArg(el);
}

let _cached_encoder_for_SplitLegArg: $.ASN1Encoder<SplitLegArg> | null = null;

/**
 * @summary Encodes a(n) SplitLegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitLegArg, encoded as an ASN.1 Element.
 */
export
function _encode_SplitLegArg (value: SplitLegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SplitLegArg) { _cached_encoder_for_SplitLegArg = function (value: SplitLegArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legToBeSplit, $.BER),
            /* IF_ABSENT  */ ((value.newCallSegment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.newCallSegment, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SplitLegArg(value, elGetter);
}


/* eslint-enable */
