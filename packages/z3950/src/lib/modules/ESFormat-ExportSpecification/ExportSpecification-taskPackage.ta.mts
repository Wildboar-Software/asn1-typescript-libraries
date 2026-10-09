/* eslint-disable */
import {
    NULL,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ExportSpecification/ClientPartToKeep.ta.mjs";


/**
 * @summary ExportSpecification_taskPackage
 * @description
 * 
 * Export Specification task package. The server keeps the client's
 * specification and supplies no service-specific server part.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.6, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExportSpecification-taskPackage ::= SEQUENCE {
 *     clientPart [1] ClientPartToKeep,
 *     serverPart [2] IMPLICIT NULL
 * }
 * ```
 * 
 * @class
 */
export
class ExportSpecification_taskPackage {
    /**
     * @summary `clientPart`.
     * @description
     * 
     * The composition and destination the client supplied.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.6.
     * 
     * @public
     * @readonly
     */
    readonly clientPart: ClientPartToKeep;
    /**
     * @summary `serverPart`.
     * @description
     * 
     * Empty. The server supplies no service-specific parameter for this task.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.6, EXT.2.
     * 
     * @public
     * @readonly
     */
    readonly serverPart: NULL;

    constructor (
        clientPart: ClientPartToKeep,
        serverPart: NULL
    ) {
        this.clientPart = clientPart;
        this.serverPart = serverPart;
    }

    /**
     * @summary Restructures an object into a ExportSpecification_taskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `ExportSpecification_taskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExportSpecification_taskPackage`.
     * @returns {ExportSpecification_taskPackage}
     */
    public static _from_object (_o: { [_K in keyof (ExportSpecification_taskPackage)]: (ExportSpecification_taskPackage)[_K] }): ExportSpecification_taskPackage {
        return new ExportSpecification_taskPackage(_o.clientPart, _o.serverPart);
    }


}

/**
 * @summary The Leading Root Component Types of ExportSpecification_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExportSpecification_taskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("clientPart", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverPart", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExportSpecification_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExportSpecification_taskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExportSpecification_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExportSpecification_taskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExportSpecification_taskPackage: $.ASN1Decoder<ExportSpecification_taskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExportSpecification_taskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExportSpecification_taskPackage (el: _Element): ExportSpecification_taskPackage {
    if (!_cached_decoder_for_ExportSpecification_taskPackage) { _cached_decoder_for_ExportSpecification_taskPackage = function (el: _Element): ExportSpecification_taskPackage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ExportSpecification-taskPackage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "clientPart";
    sequence[1].name = "serverPart";
    const clientPart: ClientPartToKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(sequence[0]);
    const serverPart: NULL = $._decode_implicit<NULL>(() => $._decodeNull)(sequence[1]);
    return new ExportSpecification_taskPackage(
        clientPart,
        serverPart,

    );
}; }
    return _cached_decoder_for_ExportSpecification_taskPackage(el);
}

let _cached_encoder_for_ExportSpecification_taskPackage: $.ASN1Encoder<ExportSpecification_taskPackage> | null = null;

/**
 * @summary Encodes a(n) ExportSpecification_taskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExportSpecification_taskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_ExportSpecification_taskPackage (value: ExportSpecification_taskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExportSpecification_taskPackage) { _cached_encoder_for_ExportSpecification_taskPackage = function (value: ExportSpecification_taskPackage, elGetter: $.ASN1Encoder<ExportSpecification_taskPackage>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.clientPart, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.serverPart, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ExportSpecification_taskPackage(value, elGetter);
}


/* eslint-enable */
