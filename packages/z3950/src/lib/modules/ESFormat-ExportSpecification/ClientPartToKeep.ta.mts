/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompSpec, _decode_CompSpec, _encode_CompSpec } from "../Z39-50-APDU-2001/CompSpec.ta.mjs";
import { Destination, _decode_Destination, _encode_Destination } from "../ESFormat-ExportSpecification/Destination.ta.mjs";


/**
 * @summary ClientPartToKeep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep ::= SEQUENCE {
 *     composition         [1] IMPLICIT CompSpec,
 *     exportDestination   [2] Destination}
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep {
    /**
     * @summary `composition`.
     * @public
     * @readonly
     */
    readonly composition: CompSpec;
    /**
     * @summary `exportDestination`.
     * @public
     * @readonly
     */
    readonly exportDestination: Destination;

    constructor (
        composition: CompSpec,
        exportDestination: Destination
    ) {
        this.composition = composition;
        this.exportDestination = exportDestination;
    }

    /**
     * @summary Restructures an object into a ClientPartToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartToKeep`.
     * @returns {ClientPartToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartToKeep)]: (ClientPartToKeep)[_K] }): ClientPartToKeep {
        return new ClientPartToKeep(_o.composition, _o.exportDestination);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("composition", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("exportDestination", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartToKeep: $.ASN1Decoder<ClientPartToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep (el: _Element): ClientPartToKeep {
    if (!_cached_decoder_for_ClientPartToKeep) { _cached_decoder_for_ClientPartToKeep = function (el: _Element): ClientPartToKeep {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ClientPartToKeep contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "composition";
    sequence[1].name = "exportDestination";
    let composition!: CompSpec;
    let exportDestination!: Destination;
    composition = $._decode_implicit<CompSpec>(() => _decode_CompSpec)(sequence[0]);
    exportDestination = $._decode_explicit<Destination>(() => _decode_Destination)(sequence[1]);
    return new ClientPartToKeep(
        composition,
        exportDestination,

    );
}; }
    return _cached_decoder_for_ClientPartToKeep(el);
}

let _cached_encoder_for_ClientPartToKeep: $.ASN1Encoder<ClientPartToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep (value: ClientPartToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep) { _cached_encoder_for_ClientPartToKeep = function (value: ClientPartToKeep, elGetter: $.ASN1Encoder<ClientPartToKeep>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CompSpec, $.BER)(value.composition, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Destination, $.BER)(value.exportDestination, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep(value, elGetter);
}


/* eslint-enable */
