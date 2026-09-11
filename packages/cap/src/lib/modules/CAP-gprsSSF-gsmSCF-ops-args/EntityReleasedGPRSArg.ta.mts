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
 * @summary EntityReleasedGPRSArg
 * @description
 *
 * Argument of EntityReleasedGPRS: cause of the detach or PDP
 * Context disconnect, and optional PDPID of the terminated
 * context. (3GPP TS 29.078 V19.0.0 clause 13.7.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityReleasedGPRSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gPRSCause                [0] GPRSCause {bound},
 *     pDPID                [1] PDPID                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class EntityReleasedGPRSArg {
    constructor (
        /**
         * @summary `gPRSCause`.
         * @description
         *
         * Reason for discontinuing the PDP Context or GPRS Session. The
         * gsmSCF may use this when sending
         * FurnishChargingInformationGPRS.
         * (3GPP TS 29.078 V19.0.0 clause 13.7.1.1).
         *
         * @public
         * @readonly
         */
        readonly gPRSCause: GPRSCause,
        /**
         * @summary `pDPID`.
         * @description
         *
         * Identifies the PDP Context within the GPRS Session dialogue
         * that has terminated. unknownPDPID if unknown.
         * (3GPP TS 29.078 V19.0.0 clause 13.7.1.1).
         *
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
     * @summary Restructures an object into a EntityReleasedGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `EntityReleasedGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntityReleasedGPRSArg`.
     * @returns {EntityReleasedGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (EntityReleasedGPRSArg)]: (EntityReleasedGPRSArg)[_K] }): EntityReleasedGPRSArg {
        return new EntityReleasedGPRSArg(_o.gPRSCause, _o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EntityReleasedGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntityReleasedGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gPRSCause", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EntityReleasedGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntityReleasedGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntityReleasedGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntityReleasedGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntityReleasedGPRSArg: $.ASN1Decoder<EntityReleasedGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityReleasedGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityReleasedGPRSArg (el: _Element): EntityReleasedGPRSArg {
    if (!_cached_decoder_for_EntityReleasedGPRSArg) { _cached_decoder_for_EntityReleasedGPRSArg = function (el: _Element): EntityReleasedGPRSArg {
    let gPRSCause!: GPRSCause;
    let pDPID: OPTIONAL<PDPID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gPRSCause": (_el: _Element): void => { gPRSCause = $._decode_implicit<GPRSCause>(() => _decode_GPRSCause)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntityReleasedGPRSArg,
        _extension_additions_list_spec_for_EntityReleasedGPRSArg,
        _root_component_type_list_2_spec_for_EntityReleasedGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EntityReleasedGPRSArg(
        gPRSCause,
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EntityReleasedGPRSArg(el);
}

let _cached_encoder_for_EntityReleasedGPRSArg: $.ASN1Encoder<EntityReleasedGPRSArg> | null = null;

/**
 * @summary Encodes a(n) EntityReleasedGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityReleasedGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_EntityReleasedGPRSArg (value: EntityReleasedGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityReleasedGPRSArg) { _cached_encoder_for_EntityReleasedGPRSArg = function (value: EntityReleasedGPRSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GPRSCause, $.BER)(value.gPRSCause, $.BER),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntityReleasedGPRSArg(value, elGetter);
}


/* eslint-enable */
