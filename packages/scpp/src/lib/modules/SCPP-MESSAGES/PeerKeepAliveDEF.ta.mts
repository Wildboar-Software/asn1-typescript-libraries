/* eslint-disable */
import {
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
import { GF_Updates, _decode_GF_Updates, _encode_GF_Updates } from "../SCPP-MESSAGES/GF-Updates.ta.mjs";
import { SupportedSpamFilters, _decode_SupportedSpamFilters, _encode_SupportedSpamFilters } from "../SCPP-MESSAGES/SupportedSpamFilters.ta.mjs";


/**
 * @summary PeerKeepAliveDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerKeepAliveDEF ::= SEQUENCE {
 *   sgfUpdates      GF-Updates,
 *   rgfUpdates      GF-Updates,
 *   filtersUpdates  SupportedSpamFilters
 * }
 * ```
 * 
 * @class
 */
export
class PeerKeepAliveDEF {
    constructor (
        /**
         * @summary `sgfUpdates`.
         * @public
         * @readonly
         */
        readonly sgfUpdates: GF_Updates,
        /**
         * @summary `rgfUpdates`.
         * @public
         * @readonly
         */
        readonly rgfUpdates: GF_Updates,
        /**
         * @summary `filtersUpdates`.
         * @public
         * @readonly
         */
        readonly filtersUpdates: SupportedSpamFilters
    ) {}

    /**
     * @summary Restructures an object into a PeerKeepAliveDEF
     * @description
     * 
     * This takes an `object` and converts it to a `PeerKeepAliveDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeerKeepAliveDEF`.
     * @returns {PeerKeepAliveDEF}
     */
    public static _from_object (_o: { [_K in keyof (PeerKeepAliveDEF)]: (PeerKeepAliveDEF)[_K] }): PeerKeepAliveDEF {
        return new PeerKeepAliveDEF(_o.sgfUpdates, _o.rgfUpdates, _o.filtersUpdates);
    }


}

/**
 * @summary The Leading Root Component Types of PeerKeepAliveDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeerKeepAliveDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("sgfUpdates", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rgfUpdates", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("filtersUpdates", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PeerKeepAliveDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeerKeepAliveDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeerKeepAliveDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeerKeepAliveDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeerKeepAliveDEF: $.ASN1Decoder<PeerKeepAliveDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerKeepAliveDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeerKeepAliveDEF (el: _Element): PeerKeepAliveDEF {
    if (!_cached_decoder_for_PeerKeepAliveDEF) { _cached_decoder_for_PeerKeepAliveDEF = function (el: _Element): PeerKeepAliveDEF {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PeerKeepAliveDEF contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sgfUpdates";
    sequence[1].name = "rgfUpdates";
    sequence[2].name = "filtersUpdates";
    const sgfUpdates = _decode_GF_Updates(sequence[0]);
    const rgfUpdates = _decode_GF_Updates(sequence[1]);
    const filtersUpdates = _decode_SupportedSpamFilters(sequence[2]);
    return new PeerKeepAliveDEF(
        sgfUpdates,
        rgfUpdates,
        filtersUpdates,

    );
}; }
    return _cached_decoder_for_PeerKeepAliveDEF(el);
}

let _cached_encoder_for_PeerKeepAliveDEF: $.ASN1Encoder<PeerKeepAliveDEF> | null = null;

/**
 * @summary Encodes a(n) PeerKeepAliveDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerKeepAliveDEF, encoded as an ASN.1 Element.
 */
export
function _encode_PeerKeepAliveDEF (value: PeerKeepAliveDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeerKeepAliveDEF) { _cached_encoder_for_PeerKeepAliveDEF = function (value: PeerKeepAliveDEF): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GF_Updates(value.sgfUpdates, $.BER),
            /* REQUIRED   */ _encode_GF_Updates(value.rgfUpdates, $.BER),
            /* REQUIRED   */ _encode_SupportedSpamFilters(value.filtersUpdates, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeerKeepAliveDEF(value, elGetter);
}


/* eslint-enable */
