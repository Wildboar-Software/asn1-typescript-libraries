/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProximitySupport_unitsSupported_Item, _decode_ProximitySupport_unitsSupported_Item, _encode_ProximitySupport_unitsSupported_Item } from "../RecordSyntax-explain/ProximitySupport-unitsSupported-Item.ta.mjs";
// export { ProximitySupport_unitsSupported_Item, _decode_ProximitySupport_unitsSupported_Item, _encode_ProximitySupport_unitsSupported_Item } from "../RecordSyntax-explain/ProximitySupport-unitsSupported-Item.ta.mjs";


/**
 * @summary ProximitySupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximitySupport ::= SEQUENCE {
 *   anySupport       [0] IMPLICIT BOOLEAN,
 *                           -- 'false' means no proximity support, in which case
 *                           -- unitsSupported not supplied.
 *   unitsSupported   [1] IMPLICIT SEQUENCE OF CHOICE{  
 *                           known    [1] IMPLICIT INTEGER, 
 *                                 -- values from KnownProximityUnit
 *                           private  [2] IMPLICIT SEQUENCE{  
 *                                           unit         [0] IMPLICIT INTEGER,  
 *                                           description  [1] HumanString OPTIONAL}}
 *                                               OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ProximitySupport {
    constructor (
        /**
         * @summary `anySupport`.
         * @public
         * @readonly
         */
        readonly anySupport: BOOLEAN,
        /**
         * @summary `unitsSupported`.
         * @public
         * @readonly
         */
        readonly unitsSupported: OPTIONAL<ProximitySupport_unitsSupported_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a ProximitySupport
     * @description
     * 
     * This takes an `object` and converts it to a `ProximitySupport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProximitySupport`.
     * @returns {ProximitySupport}
     */
    public static _from_object (_o: { [_K in keyof (ProximitySupport)]: (ProximitySupport)[_K] }): ProximitySupport {
        return new ProximitySupport(_o.anySupport, _o.unitsSupported);
    }


}

/**
 * @summary The Leading Root Component Types of ProximitySupport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProximitySupport: $.ComponentSpec[] = [
    new $.ComponentSpec("anySupport", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("unitsSupported", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ProximitySupport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProximitySupport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProximitySupport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProximitySupport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProximitySupport: $.ASN1Decoder<ProximitySupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximitySupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximitySupport (el: _Element): ProximitySupport {
    if (!_cached_decoder_for_ProximitySupport) { _cached_decoder_for_ProximitySupport = function (el: _Element): ProximitySupport {
    let anySupport!: BOOLEAN;
    let unitsSupported: OPTIONAL<ProximitySupport_unitsSupported_Item[]>;
    const callbacks: $.DecodingMap = {
        "anySupport": (_el: _Element): void => { anySupport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "unitsSupported": (_el: _Element): void => { unitsSupported = $._decode_implicit<ProximitySupport_unitsSupported_Item[]>(() => $._decodeSequenceOf<ProximitySupport_unitsSupported_Item>(() => _decode_ProximitySupport_unitsSupported_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProximitySupport,
        _extension_additions_list_spec_for_ProximitySupport,
        _root_component_type_list_2_spec_for_ProximitySupport,
        undefined,
    );
    return new ProximitySupport(
        anySupport,
        unitsSupported
    );
}; }
    return _cached_decoder_for_ProximitySupport(el);
}

let _cached_encoder_for_ProximitySupport: $.ASN1Encoder<ProximitySupport> | null = null;

/**
 * @summary Encodes a(n) ProximitySupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximitySupport, encoded as an ASN.1 Element.
 */
export
function _encode_ProximitySupport (value: ProximitySupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximitySupport) { _cached_encoder_for_ProximitySupport = function (value: ProximitySupport, elGetter: $.ASN1Encoder<ProximitySupport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.anySupport, $.BER),
            /* IF_ABSENT  */ ((value.unitsSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ProximitySupport_unitsSupported_Item>(() => _encode_ProximitySupport_unitsSupported_Item, $.BER), $.BER)(value.unitsSupported, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProximitySupport(value, elGetter);
}


/* eslint-enable */
