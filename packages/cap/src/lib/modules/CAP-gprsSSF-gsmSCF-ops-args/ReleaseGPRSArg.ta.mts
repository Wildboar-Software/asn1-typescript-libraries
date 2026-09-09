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
import { type GPRSCause, _decode_GPRSCause, _encode_GPRSCause } from "../CAP-datatypes/GPRSCause.ta.mjs";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";



/**
 * @summary ReleaseGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseGPRSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gprsCause                [0] GPRSCause {bound},
 *     pDPID                [1]    PDPID                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ReleaseGPRSArg {
    constructor (
        /**
         * @summary `gprsCause`.
         * @public
         * @readonly
         */
        readonly gprsCause: GPRSCause,
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
     * @summary Restructures an object into a ReleaseGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseGPRSArg`.
     * @returns {ReleaseGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseGPRSArg)]: (ReleaseGPRSArg)[_K] }): ReleaseGPRSArg {
        return new ReleaseGPRSArg(_o.gprsCause, _o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ReleaseGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsCause", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReleaseGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseGPRSArg: $.ASN1Decoder<ReleaseGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseGPRSArg (el: _Element): ReleaseGPRSArg {
    if (!_cached_decoder_for_ReleaseGPRSArg) { _cached_decoder_for_ReleaseGPRSArg = function (el: _Element): ReleaseGPRSArg {
    let gprsCause!: GPRSCause;
    let pDPID: OPTIONAL<PDPID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gprsCause": (_el: _Element): void => { gprsCause = $._decode_implicit<GPRSCause>(() => _decode_GPRSCause)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseGPRSArg,
        _extension_additions_list_spec_for_ReleaseGPRSArg,
        _root_component_type_list_2_spec_for_ReleaseGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReleaseGPRSArg(
        gprsCause,
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReleaseGPRSArg(el);
}

let _cached_encoder_for_ReleaseGPRSArg: $.ASN1Encoder<ReleaseGPRSArg> | null = null;

/**
 * @summary Encodes a(n) ReleaseGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseGPRSArg (value: ReleaseGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseGPRSArg) { _cached_encoder_for_ReleaseGPRSArg = function (value: ReleaseGPRSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GPRSCause, $.BER)(value.gprsCause, $.BER),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReleaseGPRSArg(value, elGetter);
}


/* eslint-enable */
