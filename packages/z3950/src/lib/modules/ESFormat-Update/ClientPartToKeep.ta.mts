/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep_action, _decode_ClientPartToKeep_action, _encode_ClientPartToKeep_action } from "../ESFormat-Update/ClientPartToKeep-action.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ClientPartToKeep
 * @description
 * 
 * Update parameters kept in the task package. Action, database name, and
 * schema are specified once and apply to every record in the package.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep ::= SEQUENCE {
 *     action          [1] IMPLICIT INTEGER{
 *         recordInsert    (1),
 *         recordReplace   (2),
 *         recordDelete    (3),
 *         elementUpdate   (4)
 *     },
 *     databaseName    [2] IMPLICIT InternationalString,
 *     schema          [3] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     elementSetName  [4] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep {
    /**
     * @summary `action`.
     * @description
     * 
     * `recordInsert`, `recordReplace`, `recordDelete`, or `elementUpdate`. The
     * same action applies to every record in this package.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly action: ClientPartToKeep_action;
    /**
     * @summary `databaseName`.
     * @description
     * 
     * Database to which the action applies. One database for every record in
     * this package.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly databaseName: InternationalString;
    /**
     * @summary `schema`.
     * @description
     * 
     * Database schema that applies to this update. Optional. One schema for
     * every record in this package. The standard does not define the schema
     * further here.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly schema: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `elementSetName`.
     * @description
     * 
     * Which elements of the updated records to include in the task package. If
     * omitted, updated records are not included in the task package.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly elementSetName: OPTIONAL<InternationalString>;

    constructor (
        action: ClientPartToKeep_action,
        databaseName: InternationalString,
        schema: OPTIONAL<OBJECT_IDENTIFIER>,
        elementSetName: OPTIONAL<InternationalString>
    ) {
        this.action = action;
        this.databaseName = databaseName;
        this.schema = schema;
        this.elementSetName = elementSetName;
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
        return new ClientPartToKeep(_o.action, _o.databaseName, _o.schema, _o.elementSetName);
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
    new $.ComponentSpec("action", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("databaseName", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("schema", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("elementSetName", true, $.hasTag(_TagClass.context, 4))
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
    let action!: ClientPartToKeep_action;
    let databaseName!: InternationalString;
    let schema: OPTIONAL<OBJECT_IDENTIFIER>;
    let elementSetName: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "action": (_el: _Element): void => { action = $._decode_implicit<ClientPartToKeep_action>(() => _decode_ClientPartToKeep_action)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "elementSetName": (_el: _Element): void => { elementSetName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartToKeep,
        _extension_additions_list_spec_for_ClientPartToKeep,
        _root_component_type_list_2_spec_for_ClientPartToKeep,
        undefined,
    );
    return new ClientPartToKeep(
        action,
        databaseName,
        schema,
        elementSetName
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
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ClientPartToKeep_action, $.BER)(value.action, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.databaseName, $.BER);
    if (value.schema !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER);
    }
    if (value.elementSetName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.elementSetName, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep(value, elGetter);
}


/* eslint-enable */
