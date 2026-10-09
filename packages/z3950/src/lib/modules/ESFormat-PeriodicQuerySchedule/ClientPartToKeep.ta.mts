/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ClientPartToKeep_resultSetDisposition, _decode_ClientPartToKeep_resultSetDisposition, _encode_ClientPartToKeep_resultSetDisposition } from "../ESFormat-PeriodicQuerySchedule/ClientPartToKeep-resultSetDisposition.ta.mjs";
import { Destination, _decode_Destination, _encode_Destination } from "../ESFormat-ExportSpecification/Destination.ta.mjs";
import { ClientPartToKeep_exportParameters, _decode_ClientPartToKeep_exportParameters, _encode_ClientPartToKeep_exportParameters } from "../ESFormat-PeriodicQuerySchedule/ClientPartToKeep-exportParameters.ta.mjs";


/**
 * @summary ClientPartToKeep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep ::= SEQUENCE{
 *     activeFlag                  [1] IMPLICIT BOOLEAN,
 *     databaseNames               [2] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     --databaseNames must not occur if option bit 20 is set
 *     resultSetDisposition        [3] IMPLICIT INTEGER {
 *         replace           (1),
 *         append            (2),
 *         createNew         (3)
 *         -- Only if client and server have agreement about naming
 *         -- convention for the resulting package,
 *         -- and only if no result set is specified
 *     } OPTIONAL,
 *     -- Mandatory on 'create' if result set is specified,
 *     -- in which case it must be 'replace' or 'append
 *     alertDestination            [4] Destination OPTIONAL,
 *     exportParameters            [5] CHOICE {
 *         packageName     [1] IMPLICIT InternationalString,
 *         exportPackage   [2] ExportSpecification
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep {
    /**
     * @summary `activeFlag`.
     * @public
     * @readonly
     */
    readonly activeFlag: BOOLEAN;
    /**
     * @summary `databaseNames`.
     * @public
     * @readonly
     */
    readonly databaseNames: OPTIONAL<InternationalString[]>;
    /**
     * @summary `resultSetDisposition`.
     * @public
     * @readonly
     */
    readonly resultSetDisposition: OPTIONAL<ClientPartToKeep_resultSetDisposition>;
    /**
     * @summary `alertDestination`.
     * @public
     * @readonly
     */
    readonly alertDestination: OPTIONAL<Destination>;
    /**
     * @summary `exportParameters`.
     * @public
     * @readonly
     */
    readonly exportParameters: OPTIONAL<ClientPartToKeep_exportParameters>;

    constructor (
        activeFlag: BOOLEAN,
        databaseNames: OPTIONAL<InternationalString[]>,
        resultSetDisposition: OPTIONAL<ClientPartToKeep_resultSetDisposition>,
        alertDestination: OPTIONAL<Destination>,
        exportParameters: OPTIONAL<ClientPartToKeep_exportParameters>
    ) {
        this.activeFlag = activeFlag;
        this.databaseNames = databaseNames;
        this.resultSetDisposition = resultSetDisposition;
        this.alertDestination = alertDestination;
        this.exportParameters = exportParameters;
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
        return new ClientPartToKeep(_o.activeFlag, _o.databaseNames, _o.resultSetDisposition, _o.alertDestination, _o.exportParameters);
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
    new $.ComponentSpec("activeFlag", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("databaseNames", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resultSetDisposition", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alertDestination", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("exportParameters", true, $.hasTag(_TagClass.context, 5))
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
    let activeFlag!: BOOLEAN;
    let databaseNames: OPTIONAL<InternationalString[]>;
    let resultSetDisposition: OPTIONAL<ClientPartToKeep_resultSetDisposition>;
    let alertDestination: OPTIONAL<Destination>;
    let exportParameters: OPTIONAL<ClientPartToKeep_exportParameters>;
    const callbacks: $.DecodingMap = {
        "activeFlag": (_el: _Element): void => { activeFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "databaseNames": (_el: _Element): void => { databaseNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "resultSetDisposition": (_el: _Element): void => { resultSetDisposition = $._decode_implicit<ClientPartToKeep_resultSetDisposition>(() => _decode_ClientPartToKeep_resultSetDisposition)(_el); },
        "alertDestination": (_el: _Element): void => { alertDestination = $._decode_explicit<Destination>(() => _decode_Destination)(_el); },
        "exportParameters": (_el: _Element): void => { exportParameters = $._decode_explicit<ClientPartToKeep_exportParameters>(() => _decode_ClientPartToKeep_exportParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartToKeep,
        _extension_additions_list_spec_for_ClientPartToKeep,
        _root_component_type_list_2_spec_for_ClientPartToKeep,
        undefined,
    );
    return new ClientPartToKeep(
        activeFlag,
        databaseNames,
        resultSetDisposition,
        alertDestination,
        exportParameters
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
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.activeFlag, $.BER);
    if (value.databaseNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.databaseNames, $.BER);
    }
    if (value.resultSetDisposition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ClientPartToKeep_resultSetDisposition, $.BER)(value.resultSetDisposition, $.BER);
    }
    if (value.alertDestination !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_Destination, $.BER)(value.alertDestination, $.BER);
    }
    if (value.exportParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_ClientPartToKeep_exportParameters, $.BER)(value.exportParameters, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep(value, elGetter);
}


/* eslint-enable */
