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
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";



/**
 * @summary CancelGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelGPRSArg ::= SEQUENCE {
 *     pDPID                [0] PDPID                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class CancelGPRSArg {
    constructor (
        /**
         * @summary `pDPID`.
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CancelGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `CancelGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelGPRSArg`.
     * @returns {CancelGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (CancelGPRSArg)]: (CancelGPRSArg)[_K] }): CancelGPRSArg {
        return new CancelGPRSArg(_o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CancelGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CancelGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelGPRSArg: $.ASN1Decoder<CancelGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelGPRSArg (el: _Element): CancelGPRSArg {
    if (!_cached_decoder_for_CancelGPRSArg) { _cached_decoder_for_CancelGPRSArg = function (el: _Element): CancelGPRSArg {
    let pDPID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelGPRSArg,
        _extension_additions_list_spec_for_CancelGPRSArg,
        _root_component_type_list_2_spec_for_CancelGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CancelGPRSArg(
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CancelGPRSArg(el);
}

let _cached_encoder_for_CancelGPRSArg: $.ASN1Encoder<CancelGPRSArg> | null = null;

/**
 * @summary Encodes a(n) CancelGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelGPRSArg (value: CancelGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelGPRSArg) { _cached_encoder_for_CancelGPRSArg = function (value: CancelGPRSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelGPRSArg(value, elGetter);
}


/* eslint-enable */
