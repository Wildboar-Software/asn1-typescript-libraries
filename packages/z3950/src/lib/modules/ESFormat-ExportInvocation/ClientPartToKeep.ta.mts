/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep_exportSpec, _decode_ClientPartToKeep_exportSpec, _encode_ClientPartToKeep_exportSpec } from "../ESFormat-ExportInvocation/ClientPartToKeep-exportSpec.ta.mjs";


/**
 * @summary ClientPartToKeep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep ::= SEQUENCE {
 *     exportSpec      [1] CHOICE {
 *         packageName     [1] IMPLICIT InternationalString,
 *         packageSpec     [2] ExportSpecification
 *     },
 *     numberOfCopies  [2] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep {
    /**
     * @summary `exportSpec`.
     * @public
     * @readonly
     */
    readonly exportSpec: ClientPartToKeep_exportSpec;
    /**
     * @summary `numberOfCopies`.
     * @public
     * @readonly
     */
    readonly numberOfCopies: INTEGER;

    constructor (
        exportSpec: ClientPartToKeep_exportSpec,
        numberOfCopies: INTEGER
    ) {
        this.exportSpec = exportSpec;
        this.numberOfCopies = numberOfCopies;
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
        return new ClientPartToKeep(_o.exportSpec, _o.numberOfCopies);
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
    new $.ComponentSpec("exportSpec", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfCopies", false, $.hasTag(_TagClass.context, 2))
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
    sequence[0].name = "exportSpec";
    sequence[1].name = "numberOfCopies";
    const exportSpec: ClientPartToKeep_exportSpec = $._decode_explicit<ClientPartToKeep_exportSpec>(() => _decode_ClientPartToKeep_exportSpec)(sequence[0]);
    const numberOfCopies: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new ClientPartToKeep(
        exportSpec,
        numberOfCopies,

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
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep_exportSpec, $.BER)(value.exportSpec, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfCopies, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep(value, elGetter);
}


/* eslint-enable */
